/**
 * Publicarea folderului out/ pe Bunny Storage.
 *
 *   npm run upload                  urcă doar fișierele noi sau schimbate
 *   npm run upload -- --simulare    arată ce s-ar face, fără nicio modificare
 *   npm run upload -- --sterge-vechi  după urcare, șterge fișierele care nu mai există în out/
 *
 * Reguli:
 *   - nu se șterge nimic fără --sterge-vechi, iar ștergerea vine doar după o urcare completă;
 *   - întâi resursele, apoi paginile, ca pagini noi să nu ceară fișiere încă neurcate;
 *   - fișierele care urmează să fie înlocuite sau șterse sunt salvate local în .backups/;
 *   - orice eroare la listare sau la copia de siguranță oprește publicarea;
 *   - nu se publică atâta timp cât lipsesc date din src/data/organization.ts.
 */
import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import mime from 'mime-types';
import dotenv from 'dotenv';
import { organization } from '../src/data/organization';

// Load environment variables
dotenv.config();

const BUNNY_STORAGE_API_KEY = process.env.BUNNY_STORAGE_API_KEY ?? '';
const STORAGE_ZONE = 'bloominghope';
const BASE_URL = `https://storage.bunnycdn.com/${STORAGE_ZONE}`;
// Marcajul pus în pagini acolo unde lipsesc date.
const PLACEHOLDER = '[DE COMPLETAT: ';

const args = process.argv.slice(2);
const DRY_RUN = args.includes('--simulare');
const PRUNE = args.includes('--sterge-vechi');
const unknown = args.filter((a) => a !== '--simulare' && a !== '--sterge-vechi');

interface RemoteEntry {
  ObjectName: string;
  IsDirectory: boolean;
  Checksum: string | null;
}

const sha256 = (data: Buffer) => crypto.createHash('sha256').update(data).digest('hex').toUpperCase();

async function request(remotePath: string, init: RequestInit = {}): Promise<Response> {
  const headers = new Headers(init.headers);
  headers.set('AccessKey', BUNNY_STORAGE_API_KEY);
  const url = BASE_URL + remotePath.split('/').map(encodeURIComponent).join('/');
  const response = await fetch(url, { ...init, headers });
  if (!response.ok) {
    throw new Error(`${init.method ?? 'GET'} ${remotePath}: ${response.status} ${response.statusText}`);
  }
  return response;
}

/** Fișierele din zonă: cale -> suma de control. Aruncă eroare dacă listarea nu reușește. */
async function listRemote(dir = '/', files = new Map<string, string>()): Promise<Map<string, string>> {
  const entries = (await (await request(dir)).json()) as RemoteEntry[];
  for (const entry of entries) {
    if (entry.IsDirectory) await listRemote(`${dir}${entry.ObjectName}/`, files);
    else files.set(dir + entry.ObjectName, (entry.Checksum ?? '').toUpperCase());
  }
  return files;
}

/** Fișierele locale: cale din zonă -> cale pe disc. */
function listLocal(dir: string, base = '', files = new Map<string, string>()): Map<string, string> {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === '.DS_Store') continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) listLocal(full, `${base}/${entry.name}`, files);
    else files.set(`${base}/${entry.name}`, full);
  }
  return files;
}

const order = (p: string) => (p.endsWith('.html') ? 2 : p.endsWith('.txt') ? 1 : 0);

async function backup(paths: string[]): Promise<void> {
  if (paths.length === 0) return;
  const stamp = new Date().toISOString().replace(/[:.]/g, '-');
  const dir = path.join(process.cwd(), '.backups', stamp);
  for (const p of paths) {
    const data = Buffer.from(await (await request(p)).arrayBuffer());
    const target = path.join(dir, p);
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.writeFileSync(target, data);
  }
  console.log(`💾 Copie de siguranță (${paths.length} fișiere): ${dir}`);
}

async function main() {
  if (unknown.length > 0) throw new Error(`Opțiune necunoscută: ${unknown.join(' ')}`);
  if (!BUNNY_STORAGE_API_KEY) throw new Error('BUNNY_STORAGE_API_KEY lipsește din .env');

  const outDir = path.join(process.cwd(), 'out');
  if (!fs.existsSync(path.join(outDir, 'index.html'))) {
    throw new Error('out/index.html lipsește. Rulați întâi "npm run build".');
  }

  const local = listLocal(outDir);
  const empty = Object.entries({
    address: organization.address,
    'giftTerms.ro': organization.giftTerms.ro,
    'giftTerms.en': organization.giftTerms.en,
  })
    .filter(([, value]) => !value.trim())
    .map(([name]) => name);
  // Pagini construite înainte de completarea datelor.
  const stalePages = [...local]
    .filter(([p, file]) => p.endsWith('.html') && fs.readFileSync(file, 'utf8').includes(PLACEHOLDER))
    .map(([p]) => p);
  if (empty.length > 0 || stalePages.length > 0) {
    const message = [
      empty.length > 0 ? `Date necompletate în src/data/organization.ts: ${empty.join(', ')}` : '',
      stalePages.length > 0 ? `Pagini cu marcaje de completat (reconstruiți): ${stalePages.join(', ')}` : '',
    ]
      .filter(Boolean)
      .join('\n');
    if (!DRY_RUN) throw new Error(message);
    console.warn(`⚠️  ${message}`);
  }

  const remote = await listRemote();
  const changed = [...local.keys()]
    .filter((p) => remote.get(p) !== sha256(fs.readFileSync(local.get(p)!)))
    .sort((a, b) => order(a) - order(b) || a.localeCompare(b));
  const stale = [...remote.keys()].filter((p) => !local.has(p)).sort();

  console.log(`În zonă: ${remote.size} | local: ${local.size}`);
  console.log(`De urcat: ${changed.length} | neschimbate: ${local.size - changed.length}`);
  console.log(`Vechi (doar în zonă): ${stale.length}${PRUNE ? ' — vor fi șterse' : ' — rămân pe loc'}`);

  if (DRY_RUN) {
    changed.forEach((p) => console.log(`  urcare   ${p}`));
    if (PRUNE) stale.forEach((p) => console.log(`  ștergere ${p}`));
    console.log('Simulare: nu s-a modificat nimic.');
    return;
  }

  await backup([...changed.filter((p) => remote.has(p)), ...(PRUNE ? stale : [])]);

  for (const p of changed) {
    const body = fs.readFileSync(local.get(p)!);
    await request(p, {
      method: 'PUT',
      body,
      headers: {
        'Content-Type': mime.lookup(p) || 'application/octet-stream',
        // Bunny respinge fișierul dacă ajunge alterat.
        Checksum: sha256(body),
      },
    });
    console.log(`📤 ${p}`);
  }

  if (PRUNE) {
    for (const p of stale) {
      await request(p, { method: 'DELETE' });
      console.log(`🗑️  ${p}`);
    }
  }

  console.log(`\n✅ Gata: ${changed.length} urcate, ${PRUNE ? stale.length : 0} șterse.`);
  if (changed.length > 0) {
    console.log('Pasul următor: dash.bunny.net → CDN → Pull Zone → Purge Cache.');
  }
}

main().catch((error: Error) => {
  console.error(`❌ Publicare oprită: ${error.message}`);
  process.exit(1);
});

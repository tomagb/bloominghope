import { organization as org } from './organization';
import { Language } from './translations';

export type LegalSlug = 'privacy' | 'cookies' | 'terms';

export interface LegalSection {
  heading: string;
  paragraphs?: string[];
  items?: string[];
}

export interface LegalDocument {
  title: string;
  updated: string;
  sections: LegalSection[];
}

const fill = (value: string, label: string) => value || `[DE COMPLETAT: ${label}]`;

const ro: Record<LegalSlug, LegalDocument> = {
  privacy: {
    title: 'Politica de confidențialitate',
    updated: 'Ultima actualizare: 26 noiembrie 2026',
    sections: [
      {
        heading: '1. Cine prelucrează datele',
        paragraphs: [
          `Operatorul datelor este ${org.name}, cu CUI ${org.taxId}, cu sediul în ${fill(org.address, 'adresa sediului')}${org.registryNumber ? `, înscrisă în Registrul asociațiilor și fundațiilor cu numărul ${org.registryNumber}` : ''}.`,
          `Pentru orice întrebare despre datele tale ne poți scrie la ${org.email}.`,
        ],
      },
      {
        heading: '2. Când vizitezi site-ul',
        paragraphs: [
          'Site-ul nu are conturi de utilizator, nu folosește instrumente de statistică sau de publicitate și nu setează cookie-uri.',
          'Paginile sunt livrate prin rețeaua bunny.net (BunnyWay d.o.o., Slovenia). Ca orice server web, aceasta prelucrează date tehnice despre cerere: adresa IP, data și ora, pagina cerută, tipul de browser și țara de unde vine cererea. Le folosim doar pentru funcționarea și securitatea site-ului, în temeiul interesului nostru legitim (art. 6 alin. (1) lit. f GDPR). Jurnalele tehnice se păstrează pentru o perioadă limitată, stabilită de furnizor.',
        ],
      },
      {
        heading: '3. Când ne scrii',
        paragraphs: [
          'Formularul de contact nu trimite date prin site: deschide aplicația ta de email, iar mesajul ajunge la noi numai dacă îl trimiți. Primim numele, adresa de email și conținutul mesajului. Le folosim ca să îți răspundem, în temeiul interesului nostru legitim sau pentru demersurile pe care ni le ceri.',
          'Căsuța noastră de email este găzduită de Proton (Proton AG, Elveția, țară pentru care Comisia Europeană a recunoscut un nivel adecvat de protecție). Păstrăm corespondența cât este necesar pentru rezolvarea solicitării și cel mult 2 ani de la ultimul mesaj, dacă legea nu cere altfel.',
        ],
      },
      {
        heading: '4. Când donezi',
        paragraphs: [
          'Donațiile se fac prin transfer bancar, direct din aplicația băncii tale. Pe site nu se introduc și nu se procesează date de plată.',
          'Prin extrasul de cont primim numele plătitorului, contul din care se face plata, suma, data și textul de la „Detalii plată”. Le folosim pentru evidența contabilă și fiscală (obligație legală, art. 6 alin. (1) lit. c GDPR) și pentru a ține legătura în privința donației (interes legitim). Documentele financiar-contabile se păstrează pe durata cerută de legislația contabilă.',
        ],
      },
      {
        heading: '5. Formularul 230',
        paragraphs: [
          'Butonul „Formular 230” te duce pe formular230.ro, un site administrat de un terț, cu propria politică de confidențialitate. Datele completate acolo care ne sunt transmise (de exemplu numele, codul numeric personal și adresa) sunt folosite numai pentru depunerea formularului la ANAF și pentru evidențele cerute de lege.',
        ],
      },
      {
        heading: '6. Cui transmitem datele',
        paragraphs: [
          'Nu vindem și nu închiriem date personale. Le pot primi, doar în măsura necesară: furnizorii de găzduire și email, banca, persoanele sau firma care ne țin contabilitatea și autoritățile publice, atunci când legea o cere. Rețeaua de livrare a site-ului are servere în mai multe țări; transferurile în afara Spațiului Economic European se fac numai cu garanțiile prevăzute de GDPR.',
        ],
      },
      {
        heading: '7. Drepturile tale',
        paragraphs: ['Ai dreptul:'],
        items: [
          'să afli ce date avem despre tine și să primești o copie;',
          'să ceri corectarea sau ștergerea lor;',
          'să ceri restricționarea prelucrării;',
          'să te opui prelucrării bazate pe interesul legitim;',
          'să primești datele într-un format transferabil;',
          'să îți retragi consimțământul, acolo unde prelucrarea se bazează pe el, fără efect asupra prelucrărilor anterioare.',
        ],
      },
      {
        heading: '8. Cum îți exerciți drepturile',
        paragraphs: [
          `Scrie-ne la ${org.email}. Răspundem în cel mult o lună; termenul poate fi prelungit în situațiile prevăzute de GDPR, caz în care te anunțăm.`,
          'Dacă socotești că drepturile ți-au fost încălcate, poți depune o plângere la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (B-dul G-ral Gheorghe Magheru nr. 28-30, sector 1, București, www.dataprotection.ro) sau te poți adresa instanței.',
        ],
      },
      {
        heading: '9. Copii și decizii automate',
        paragraphs: [
          'Site-ul nu colectează intenționat date de la copii. Nu luăm decizii automate și nu facem profilare.',
        ],
      },
    ],
  },
  cookies: {
    title: 'Politica de cookie-uri',
    updated: 'Ultima actualizare: 26 noiembrie 2026',
    sections: [
      {
        heading: '1. Pe scurt',
        paragraphs: [
          'Acest site nu folosește cookie-uri de statistică, de publicitate sau de urmărire și nu încarcă astfel de instrumente de la terți. De aceea nu îți cerem consimțământul; îți afișăm doar o notă informativă, pe care o poți închide.',
        ],
      },
      {
        heading: '2. Ce se salvează în browser',
        paragraphs: [
          'Dacă alegi limba din meniu (RO sau EN), browserul memorează alegerea în „local storage”, sub numele „language”. Valoarea este „ro” sau „en”, rămâne doar pe dispozitivul tău, nu ne este transmisă și nu te identifică. Este strict necesară pentru funcția pe care ai cerut-o, motiv pentru care nu cere consimțământ (art. 4 alin. (5) din Legea nr. 506/2004).',
          'Când închizi nota informativă cu „Am înțeles”, browserul memorează, tot în „local storage”, valoarea „ok” sub numele „cookieNotice”, ca să nu o mai afișeze. Nici aceasta nu ne este transmisă.',
        ],
      },
      {
        heading: '3. Cum o ștergi',
        paragraphs: [
          'Din setările browserului, la ștergerea datelor salvate de site-uri. După ștergere, site-ul revine la limba română.',
        ],
      },
      {
        heading: '4. Site-uri externe',
        paragraphs: [
          'Linkurile către alte site-uri, de exemplu formular230.ro, deschid pagini care pot folosi propriile cookie-uri, potrivit politicilor lor.',
        ],
      },
      {
        heading: '5. Modificări',
        paragraphs: [
          'Dacă vom adăuga instrumente care folosesc cookie-uri neesențiale, vom actualiza această pagină și îți vom cere acordul înainte de a le activa.',
        ],
      },
    ],
  },
  terms: {
    title: 'Termeni și condiții',
    updated: 'Ultima actualizare: 26 noiembrie 2026',
    sections: [
      {
        heading: '1. Cine administrează site-ul',
        paragraphs: [
          `Site-ul bloominghope.ro este administrat de ${org.name}, CUI ${org.taxId}, cu sediul în ${fill(org.address, 'adresa sediului')}. Contact: ${org.email}.`,
        ],
      },
      {
        heading: '2. Folosirea site-ului',
        paragraphs: [
          'Site-ul prezintă asociația, proiectele ei și modurile în care o poți sprijini. Folosindu-l, accepți acești termeni. Nu este permisă folosirea lui în scopuri ilegale sau în moduri care îi afectează funcționarea.',
        ],
      },
      {
        heading: '3. Conținut și drepturi de autor',
        paragraphs: [
          'Textele, imaginile și siglele aparțin asociației sau partenerilor ei. Pot fi distribuite pentru promovarea necomercială a asociației, cu indicarea sursei; pentru alte folosiri este nevoie de acordul scris al titularului.',
        ],
      },
      {
        heading: '4. Donații',
        paragraphs: [
          'Donațiile sunt voluntare și se fac prin transfer bancar în contul afișat pe pagina „Donează”. Sunt folosite pentru scopurile și proiectele asociației; poți indica un proiect la „Detalii plată”.',
          `Dacă ai făcut o plată din greșeală sau cu o sumă greșită, scrie-ne cât mai repede la ${org.email}, cu data și suma, ca să analizăm restituirea.`,
        ],
      },
      {
        heading: '5. Campania de Crăciun',
        paragraphs: [fill(org.giftTerms.ro, 'cum primește donatorul cadoul, în ce perioadă și în ce condiții')],
      },
      {
        heading: '6. Linkuri externe',
        paragraphs: [
          'Site-ul conține linkuri către site-uri administrate de terți, pentru al căror conținut și funcționare nu răspundem.',
        ],
      },
      {
        heading: '7. Răspundere',
        paragraphs: [
          'Ne străduim ca informațiile să fie corecte și actualizate, dar pot apărea erori sau întreruperi. În limitele permise de lege, asociația nu răspunde pentru prejudiciile produse de indisponibilitatea temporară a site-ului.',
        ],
      },
      {
        heading: '8. Date personale',
        paragraphs: ['Prelucrarea datelor este descrisă în Politica de confidențialitate și în Politica de cookie-uri.'],
      },
      {
        heading: '9. Modificări și legea aplicabilă',
        paragraphs: [
          'Putem actualiza acești termeni; versiunea în vigoare este cea publicată aici. Se aplică legea română, iar neînțelegerile care nu se rezolvă pe cale amiabilă revin instanțelor competente din România.',
        ],
      },
    ],
  },
};

const en: Record<LegalSlug, LegalDocument> = {
  privacy: {
    title: 'Privacy Policy',
    updated: 'Last updated: 26 November 2026',
    sections: [
      {
        heading: '1. Who processes your data',
        paragraphs: [
          `The data controller is ${org.name} (Blooming Hope Association), tax ID ${org.taxId}, registered office at ${fill(org.address, 'registered address')}${org.registryNumber ? `, entered in the Register of Associations and Foundations under number ${org.registryNumber}` : ''}.`,
          `For any question about your data, write to ${org.email}.`,
        ],
      },
      {
        heading: '2. When you visit the website',
        paragraphs: [
          'The website has no user accounts, uses no analytics or advertising tools and sets no cookies.',
          'Pages are delivered through the bunny.net network (BunnyWay d.o.o., Slovenia). Like any web server, it processes technical data about each request: IP address, date and time, requested page, browser type and country of origin. We use it only to run and secure the website, based on our legitimate interest (Art. 6(1)(f) GDPR). Technical logs are kept for a limited period set by the provider.',
        ],
      },
      {
        heading: '3. When you write to us',
        paragraphs: [
          'The contact form does not send data through the website: it opens your email app, and the message reaches us only if you send it. We receive your name, email address and message, and use them to answer you, based on our legitimate interest or to take the steps you ask for.',
          'Our mailbox is hosted by Proton (Proton AG, Switzerland, a country the European Commission recognises as offering adequate protection). We keep correspondence as long as needed to handle your request and no longer than 2 years after the last message, unless the law requires otherwise.',
        ],
      },
      {
        heading: '4. When you donate',
        paragraphs: [
          'Donations are made by bank transfer from your own banking app. No payment data is entered or processed on this website.',
          'Our bank statement shows the payer’s name, paying account, amount, date and payment details. We use them for accounting and tax records (legal obligation, Art. 6(1)(c) GDPR) and to contact you about the donation (legitimate interest). Accounting documents are kept for the period required by accounting law.',
        ],
      },
      {
        heading: '5. Form 230',
        paragraphs: [
          'The “Form 230” button takes you to formular230.ro, a third-party website with its own privacy policy. Data filled in there and passed on to us (such as name, personal identification number and address) is used only to file the form with the Romanian tax authority and to keep the records required by law.',
        ],
      },
      {
        heading: '6. Who receives the data',
        paragraphs: [
          'We do not sell or rent personal data. Only as far as necessary, it may be received by our hosting and email providers, our bank, those who keep our accounts and public authorities where the law requires it. The delivery network has servers in several countries; transfers outside the European Economic Area take place only with the safeguards required by the GDPR.',
        ],
      },
      {
        heading: '7. Your rights',
        paragraphs: ['You have the right:'],
        items: [
          'to know what data we hold about you and to receive a copy;',
          'to ask for it to be corrected or erased;',
          'to ask for processing to be restricted;',
          'to object to processing based on legitimate interest;',
          'to receive your data in a portable format;',
          'to withdraw consent where processing relies on it, without affecting earlier processing.',
        ],
      },
      {
        heading: '8. How to exercise your rights',
        paragraphs: [
          `Write to ${org.email}. We reply within one month; the period may be extended where the GDPR allows it, and we will tell you.`,
          'If you believe your rights have been infringed, you may complain to the Romanian National Supervisory Authority for Personal Data Processing (28-30 G-ral Gheorghe Magheru Blvd., District 1, Bucharest, www.dataprotection.ro) or go to court.',
        ],
      },
      {
        heading: '9. Children and automated decisions',
        paragraphs: ['The website does not knowingly collect data from children. We make no automated decisions and do no profiling.'],
      },
    ],
  },
  cookies: {
    title: 'Cookie Policy',
    updated: 'Last updated: 26 November 2026',
    sections: [
      {
        heading: '1. In short',
        paragraphs: [
          'This website uses no analytics, advertising or tracking cookies and loads no such third-party tools. That is why we ask for no consent; we only show an information notice, which you can close.',
        ],
      },
      {
        heading: '2. What is stored in your browser',
        paragraphs: [
          'If you choose a language in the menu (RO or EN), your browser remembers it in local storage under the name “language”. The value is “ro” or “en”, stays on your device, is not sent to us and does not identify you. It is strictly necessary for the function you asked for, so it needs no consent (Art. 4(5) of Romanian Law no. 506/2004).',
          'When you close the information notice with “Got it”, your browser also stores the value “ok” in local storage under the name “cookieNotice”, so the notice is not shown again. It is not sent to us either.',
        ],
      },
      {
        heading: '3. How to delete it',
        paragraphs: ['Clear website data in your browser settings. The website will then return to Romanian.'],
      },
      {
        heading: '4. External websites',
        paragraphs: ['Links to other websites, such as formular230.ro, open pages that may use their own cookies under their own policies.'],
      },
      {
        heading: '5. Changes',
        paragraphs: ['If we add tools that use non-essential cookies, we will update this page and ask for your consent before enabling them.'],
      },
    ],
  },
  terms: {
    title: 'Terms and Conditions',
    updated: 'Last updated: 26 November 2026',
    sections: [
      {
        heading: '1. Who runs the website',
        paragraphs: [
          `bloominghope.ro is run by ${org.name} (Blooming Hope Association), tax ID ${org.taxId}, registered office at ${fill(org.address, 'registered address')}. Contact: ${org.email}.`,
        ],
      },
      {
        heading: '2. Using the website',
        paragraphs: [
          'The website presents the association, its projects and the ways you can support it. By using it you accept these terms. It may not be used unlawfully or in ways that disrupt it.',
        ],
      },
      {
        heading: '3. Content and copyright',
        paragraphs: [
          'Texts, images and logos belong to the association or its partners. They may be shared to promote the association non-commercially, naming the source; any other use needs the owner’s written consent.',
        ],
      },
      {
        heading: '4. Donations',
        paragraphs: [
          'Donations are voluntary and made by bank transfer to the account shown on the “Donate” page. They are used for the association’s purposes and projects; you may name a project in the payment details.',
          `If you paid by mistake or sent a wrong amount, write to ${org.email} as soon as possible with the date and amount, so we can review a refund.`,
        ],
      },
      {
        heading: '5. Christmas campaign',
        paragraphs: [fill(org.giftTerms.en, 'how donors receive the gift, when and on what conditions')],
      },
      {
        heading: '6. External links',
        paragraphs: ['The website links to third-party websites whose content and operation we are not responsible for.'],
      },
      {
        heading: '7. Liability',
        paragraphs: [
          'We try to keep information accurate and up to date, but errors or interruptions may occur. To the extent permitted by law, the association is not liable for damage caused by temporary unavailability of the website.',
        ],
      },
      {
        heading: '8. Personal data',
        paragraphs: ['Data processing is described in the Privacy Policy and the Cookie Policy.'],
      },
      {
        heading: '9. Changes and governing law',
        paragraphs: [
          'We may update these terms; the version published here applies. Romanian law governs them, and disputes not settled amicably go to the competent Romanian courts.',
        ],
      },
    ],
  },
};

export const legal: Record<Language, Record<LegalSlug, LegalDocument>> = { ro, en };

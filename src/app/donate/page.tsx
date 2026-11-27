'use client';

import { CopyField } from '@/components/CopyField';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { bankDetails } from '@/data/bank';
import { translations } from '@/data/translations';
import ui from '@/styles/ui.module.css';
import styles from './donate.module.css';

export default function Donate() {
  const { language } = useLanguage();
  const t = translations[language].donate;

  return (
    <main>
      <Header />
      <section className={ui.top}>
        <div className={ui.wrap}>
          <h1>{t.title}</h1>
          <p>{t.subtitle}</p>
        </div>
      </section>

      <div className={styles.donateContent}>
        <p className={styles.intro}>{t.intro}</p>

        <div className={styles.card}>
          <CopyField
            label={t.bank.beneficiaryLabel}
            value={bankDetails.beneficiary}
            buttonLabels={t.bank}
          />
          <CopyField
            label={t.bank.ibanLabel}
            value={bankDetails.iban}
            copyValue={bankDetails.iban.replace(/\s/g, '')}
            large
            buttonLabels={t.bank}
          />
          <CopyField
            label={t.bank.detailsLabel}
            value={t.bank.detailsValue}
            hint={t.bank.detailsHint}
            buttonLabels={t.bank}
          />
          <p className={styles.meta}>
            {t.bank.bankLabel}: <strong>{bankDetails.bank}</strong> · {t.bank.currencyLabel}:{' '}
            <strong>{bankDetails.currency}</strong> · {t.bank.taxIdLabel}:{' '}
            <strong>{bankDetails.taxId}</strong>
          </p>
        </div>

        <div className={styles.howTo}>
          <h2 className={styles.sectionTitle}>{t.howTo.title}</h2>
          <ol className={styles.steps}>
            {t.howTo.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>

        <div className={styles.form230Block}>
          <h2 className={styles.form230Title}>{t.form230.title}</h2>
          <p>{t.form230.description}</p>
          <a
            href="https://formular230.ro/asociatia-blooming-hope"
            target="_blank"
            rel="noopener noreferrer"
            className={`${ui.btn} ${ui.amber}`}
          >
            {t.form230.buttonText}
          </a>
        </div>

        <p className={styles.thanks}>{t.thanks}</p>
      </div>

      <Footer />
    </main>
  );
}

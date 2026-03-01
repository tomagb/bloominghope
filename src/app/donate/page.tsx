'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';
import styles from './donate.module.css';

export default function Donate() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <main>
      <Header />
      <section className={styles.donateHero}>
        <div className="container">
          <h1 className={styles.title}>{t.donate?.title || (language === 'ro' ? 'Donează' : 'Donate')}</h1>
          <p className={styles.subtitle}>
            {t.donate?.subtitle || (language === 'ro'
              ? 'Ajută-ne să construim un viitor mai bun prin educație.'
              : 'Help us build a better future through education.')}
          </p>
        </div>
      </section>

      <section className={styles.donateContent}>
        <div className="container">
          <a
            href="https://formular230.ro/asociatia-blooming-hope"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            {t.donate?.heroButton || (language === 'ro' ? 'Completează formularul 230' : 'Fill form nr. 230')}
          </a>

          <div className={styles.form230Block}>
            <h2 className={styles.sectionTitle}>
              {t.donate.form230.title}
            </h2>
            <p className={styles.form230Description}>
              {t.donate.form230.description}
            </p>
            <ul className={styles.form230List}>
              {t.donate.form230.howItWorks.map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

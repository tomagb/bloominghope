'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';
import styles from './CTASection.module.css';

export const CTASection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className={styles.cta}>
      <div className="container">
        <h2 className={styles.title}>{t.cta.title}</h2>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.icon}>🤝</div>
            <h3 className={styles.cardTitle}>{t.cta.volunteer}</h3>
            <p className={styles.cardText}>
              Alătură-te echipei noastre și ajută-ne să facem diferența.
            </p>
            <button className={styles.btn}>Get Started</button>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>💝</div>
            <h3 className={styles.cardTitle}>{t.cta.donate}</h3>
            <p className={styles.cardText}>{t.cta.donateDesc}</p>
            <button className={styles.btn}>Donate Now</button>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>📬</div>
            <h3 className={styles.cardTitle}>{t.cta.newsletter}</h3>
            <p className={styles.cardText}>{t.cta.newsletterDesc}</p>
            <button className={styles.btn}>Subscribe</button>
          </div>
        </div>
      </div>
    </section>
  );
};

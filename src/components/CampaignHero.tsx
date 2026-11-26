'use client';

import React from 'react';
import Link from 'next/link';
import { Cormorant_Garamond } from 'next/font/google';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';
import styles from './CampaignHero.module.css';

const serif = Cormorant_Garamond({
  subsets: ['latin', 'latin-ext'],
  weight: ['600', '700'],
  display: 'swap',
});

export const CampaignHero: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].campaign;

  const partners = [
    { label: t.initiative, src: '/campaign/p-blooming.png', alt: 'Blooming Hope', height: 48 },
    { label: t.educationPartner, src: '/campaign/p-scoala.png', alt: 'Super Școala', height: 22 },
    { label: t.partner, src: '/campaign/p-a.png', alt: t.partner, height: 34 },
    { label: t.sponsor, src: '/campaign/p-sponsor.png', alt: t.sponsor, height: 34 },
  ];

  // div, nu section: stilurile globale section:nth-child nu trebuie aplicate aici
  return (
    <div className={styles.campaign}>
      <div className={styles.art}>
        <picture>
          <source media="(max-width: 800px)" srcSet="/campaign/arta-tel.jpg" />
          <img src="/campaign/arta-lat.jpg" alt={t.imageAlt} />
        </picture>
      </div>
      <div className={styles.inner}>
        <div className={styles.text}>
          <img className={styles.logo} src="/campaign/logo-campanie.png" alt={t.logoAlt} />
          <h2 className={`${styles.title} ${serif.className}`}>{t.title}</h2>
          <p className={`${styles.subtitle} ${serif.className}`}>{t.subtitle}</p>
          <p className={styles.description}>{t.description}</p>
          <div className={styles.buttons}>
            <Link href="/donate" className={styles.primary}>
              {t.donate} &rarr;
            </Link>
            <a
              href="https://formular230.ro/asociatia-blooming-hope"
              className={styles.secondary}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.form230}
            </a>
          </div>
        </div>
        <div className={styles.partners}>
          {partners.map((p) => (
            <figure key={p.src}>
              <figcaption>{p.label}</figcaption>
              <span>
                <img src={p.src} alt={p.alt} style={{ height: p.height }} />
              </span>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
};

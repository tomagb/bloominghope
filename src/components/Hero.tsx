'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';
import styles from './Hero.module.css';

export const Hero: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.content}>
          <h1 className={styles.title}>{t.hero.title}</h1>
          <p className={styles.subtitle}>{t.hero.subtitle}</p>
          <div className={styles.ctaContainer}>
            <Link href="/donate" className={styles.ctaPrimary}>{t.hero.cta1}</Link>
            <a href="#growth-lab" className={styles.ctaSecondary}>{t.hero.cta2}</a>
          </div>
        </div>
      </div>
    </section>
  );
};

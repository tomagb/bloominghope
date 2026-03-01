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
      <div className="{styels.container}">
        <div className={styles.content}>
          <h1 className={styles.title}>{t.hero.title}</h1>
          <p className={styles.subtitle}>{t.hero.subtitle}</p>
          <div className={styles.form230Container}>
            <Link href="/donate" className={styles.form230Button}>{t.hero.form230}</Link>
          </div>
          <div className={styles.ctaContainer}>
            <a href="#kindergarten" className={styles.ctaSecondary}>{t.hero.cta1}</a>
            <a href="#growth-lab" className={styles.ctaSecondary}>{t.hero.cta2}</a>
          </div>
        </div>
      </div>
    </section>
  );
};

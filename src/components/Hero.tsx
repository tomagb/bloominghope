'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';
import ui from '@/styles/ui.module.css';
import styles from './Hero.module.css';

export const Hero: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className={`${ui.section} ${ui.center}`}>
      <div className={ui.wrap}>
        <h1 className={ui.heading}>{t.hero.title}</h1>
        <p className={ui.lead}>{t.hero.subtitle}</p>
        <div className={styles.buttons}>
          <Link href="/donate" className={`${ui.btn} ${ui.purple}`}>{t.hero.form230}</Link>
          <a href="#kindergarten" className={`${ui.btn} ${ui.outline}`}>{t.hero.cta1}</a>
          <a href="#growth-lab" className={`${ui.btn} ${ui.outline}`}>{t.hero.cta2}</a>
        </div>
      </div>
    </section>
  );
};

'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';
import styles from './KindergartenSection.module.css';

export const KindergartenSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className={styles.kindergarten}>
      <div className="container">
        <h2 className={styles.title}>{t.kindergarten.title}</h2>
        <h3 className={styles.concept}>{t.kindergarten.concept}</h3>
        <p className={styles.description}>{t.kindergarten.description}</p>
      </div>
    </section>
  );
};

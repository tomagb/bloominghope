'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';
import styles from './MottoSection.module.css';

export const MottoSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className={styles.motto}>
      <div className="{styels.container}">
        <div className={styles.content}>
          <p className={styles.description}>{t.motto.description}</p>
        </div>
      </div>
    </section>
  );
};

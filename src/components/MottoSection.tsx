'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';
import ui from '@/styles/ui.module.css';
import styles from './MottoSection.module.css';

export const MottoSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  // Cele două expresii din motto sunt scoase în evidență.
  const parts = t.motto.description.split(/(Learn to Grow|Grow to Give)/);

  return (
    <section className={`${ui.section} ${ui.soft} ${styles.motto}`}>
      <div className={ui.wrap}>
        <p className={styles.quote}>
          {parts.map((part, index) => (index % 2 ? <strong key={index}>{part}</strong> : part))}
        </p>
      </div>
    </section>
  );
};

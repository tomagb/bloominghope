'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';
import styles from './KindergartenSection.module.css';

const renderContent = (content: any[]): React.ReactNode[] => {
  return content.map((item, index) => {
    if (typeof item === 'string') {
      return item;
    }
    if (item.type === 'emphasis') {
      return (
        <span
          key={index}
          style={{ color: '#7c3aed', fontWeight: 'bold' }}
        >
          {item.text}
        </span>
      );
    }
    return null;
  });
};

export const KindergartenSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className={styles.kindergarten} id="kindergarten">
      <div className="container">
        <h2 className={styles.title}>{t.kindergarten.title}</h2>
        <h3 className={styles.concept}>{t.kindergarten.concept}</h3>
        {Array.isArray(t.kindergarten.description) ? (
          t.kindergarten.description.map((para: any, index: number) => (
            <p key={index} className={styles.description}>
              {para.type === 'paragraph' ? renderContent(para.content) : para}
            </p>
          ))
        ) : (
          <p className={styles.description}>{t.kindergarten.description}</p>
        )}
      </div>
    </section>
  );
};

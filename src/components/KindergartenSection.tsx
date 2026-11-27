'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';
import ui from '@/styles/ui.module.css';
import styles from './KindergartenSection.module.css';

const renderContent = (content: any[]): React.ReactNode[] => {
  return content.map((item, index) => {
    if (typeof item === 'string') {
      return item;
    }
    if (item.type === 'emphasis') {
      return <strong key={index}>{item.text}</strong>;
    }
    return null;
  });
};

export const KindergartenSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className={`${ui.section} ${ui.soft} ${ui.center}`} id="kindergarten">
      <div className={ui.wrap}>
        <h2 className={ui.heading}>{t.kindergarten.title}</h2>
        <p className={ui.lead}>
          <strong>{t.kindergarten.concept}</strong>
        </p>
        {t.kindergarten.description.map((para: any, index: number) => (
          <p key={index} className={ui.lead}>
            {para.type === 'paragraph' ? renderContent(para.content) : para}
          </p>
        ))}

        <p className={styles.status}>
          <span className={ui.tag}>{t.kindergarten.status}</span>
        </p>
        <h3 className={styles.progressTitle}>{t.kindergarten.progressBars.phases}</h3>
        <ol className={styles.road}>
          {t.kindergarten.progressBars.phaseLabels.map((phase) => (
            <li key={phase}>{phase}</li>
          ))}
        </ol>
      </div>
    </section>
  );
};

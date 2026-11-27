'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';
import ui from '@/styles/ui.module.css';
import styles from './GrowthLabSection.module.css';
import { WorkshopCard } from './WorkshopCard';

export const GrowthLabSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className={`${ui.section} ${ui.center}`} id="growth-lab">
      <div className={ui.wrap}>
        <h2 className={ui.heading}>{t.growthLab.title}</h2>
        <p className={ui.lead}>
          <strong>{t.growthLab.subtitle}</strong>
        </p>
        <p className={ui.lead}>{t.growthLab.description}</p>

        <div className={ui.cards4}>
          {t.growthLab.workshops.map((workshop, index) => (
            <WorkshopCard
              key={index}
              title={workshop.title}
              description={workshop.description}
              index={index}
            />
          ))}
        </div>

        <p className={styles.soon}>
          <span className={ui.tag}>{t.growthLab.soon}</span>
        </p>
      </div>
    </section>
  );
};

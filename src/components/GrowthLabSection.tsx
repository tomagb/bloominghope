'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';
import styles from './GrowthLabSection.module.css';
import { WorkshopCard } from './WorkshopCard';

export const GrowthLabSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className={styles.lab} id="growth-lab">
      <div className="container">
        <h2 className={styles.title}>{t.growthLab.title}</h2>
        <h3 className={styles.subtitle}>{t.growthLab.subtitle}</h3>
        <p className={styles.description}>{t.growthLab.description}</p>

        <div className={styles.grid}>
          {t.growthLab.workshops.map((workshop, index) => (
            <WorkshopCard
              key={index}
              title={workshop.title}
              description={workshop.description}
              index={index}
            />
          ))}
        </div>

        <div className={styles.stickyNote}>
          {t.growthLab.stickyNote}
        </div>
      </div>
    </section>
  );
};

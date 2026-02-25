'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';
import styles from './MissionSection.module.css';
import { MissionPillar } from './MissionPillar';

export const MissionSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className={styles.mission}>
      <div className="container">
        <h2 className={styles.title}>{t.mission.title}</h2>
        <p className={styles.intro}>{t.mission.intro}</p>
        <div className={styles.grid}>
          {t.mission.pillars.map((pillar, index) => (
            <MissionPillar
              key={index}
              title={pillar.title}
              description={pillar.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

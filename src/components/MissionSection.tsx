'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';
import ui from '@/styles/ui.module.css';
import { MissionPillar } from './MissionPillar';

export const MissionSection: React.FC<{ soft?: boolean }> = ({ soft = false }) => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className={`${ui.section} ${ui.center} ${soft ? ui.soft : ''}`}>
      <div className={ui.wrap}>
        <h2 className={ui.heading}>{t.mission.title}</h2>
        <p className={ui.lead}>{t.mission.intro}</p>
        <div className={ui.cards5}>
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

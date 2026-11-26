'use client';

import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { legal, LegalSlug } from '@/data/legal';
import styles from './LegalPage.module.css';

export const LegalPage: React.FC<{ slug: LegalSlug }> = ({ slug }) => {
  const { language } = useLanguage();
  const doc = legal[language][slug];

  return (
    <main>
      <Header />
      <article className={styles.page}>
        <h1>{doc.title}</h1>
        <p className={styles.updated}>{doc.updated}</p>
        {doc.sections.map((section) => (
          <div key={section.heading}>
            <h2>{section.heading}</h2>
            {section.paragraphs?.map((text) => <p key={text}>{text}</p>)}
            {section.items && (
              <ul>
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </article>
      <Footer />
    </main>
  );
};

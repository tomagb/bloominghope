'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.section}>
            <h4 className={styles.title}>{t.footer.contact}</h4>
            <p className={styles.text}>{t.footer.email}</p>
            <p className={styles.text}>{t.footer.phone}</p>
          </div>

          <div className={styles.section}>
            <h4 className={styles.title}>{t.footer.socialMedia}</h4>
            <div className={styles.socialLinks}>
              <a href="#" aria-label="Facebook">
                f
              </a>
              <a href="#" aria-label="Instagram">
                in
              </a>
              <a href="#" aria-label="Twitter">
                𝕏
              </a>
              <a href="#" aria-label="LinkedIn">
                in
              </a>
            </div>
          </div>

          <div className={styles.section}>
            <p className={styles.motto}>{t.footer.motto}</p>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; 2024 Blooming Hope. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

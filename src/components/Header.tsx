'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations, Language } from '@/data/translations';
import styles from './Header.module.css';

export const Header: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.content}>
          <Link href="/" className={styles.logo}>{t.header.title}</Link>
          <nav className={styles.nav}>
            <Link href="/" className={styles.navLink}>{t.header.nav.home}</Link>
            <Link href="/about" className={styles.navLink}>{t.header.nav.about}</Link>
            <Link href="/donate" className={styles.navLink}>{t.header.nav.donate}</Link>
          </nav>
          <div className={styles.langSwitcher}>
            <button
              className={`${styles.langBtn} ${language === 'ro' ? styles.active : ''}`}
              onClick={() => setLanguage('ro')}
              aria-label="Select Romanian"
            >
              RO
            </button>
            <button
              className={`${styles.langBtn} ${language === 'en' ? styles.active : ''}`}
              onClick={() => setLanguage('en')}
              aria-label="Select English"
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

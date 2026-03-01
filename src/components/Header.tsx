'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';
import styles from './Header.module.css';

export const Header: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  return (
    <header className={styles.header}>
      <div className="{styles.container}">
        <div className={styles.content}>
          <Link href="/" className={styles.branding}>
            <Image
              src="/logo-horizontal-transparent.png"
              alt="Blooming Hope Logo"
              width={240}
              height={80}
              priority
            />
            {/* <span className={styles.title}>{t.header.title}</span> */}
          </Link>
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

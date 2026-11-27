'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';
import ui from '@/styles/ui.module.css';
import styles from './Header.module.css';

export const Header: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];
  const [open, setOpen] = useState(false);
  // trailingSlash: adresa poate veni cu sau fără bara de la final
  const path = (usePathname() ?? '/').replace(/\/+$/, '') || '/';

  const links = [
    { href: '/', label: t.header.nav.home },
    { href: '/about', label: t.header.nav.about },
    { href: '/contact', label: t.header.nav.contact },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <Link href="/" className={styles.branding}>
          <Image src="/logo-header.png" alt="Blooming Hope" width={797} height={608} priority />
        </Link>
        <nav id="main-menu" className={`${styles.nav} ${open ? styles.open : ''}`}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={styles.navLink}
              aria-current={path === link.href ? 'page' : undefined}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className={styles.langSwitcher}>
          <button
            type="button"
            className={`${styles.langBtn} ${language === 'ro' ? styles.active : ''}`}
            onClick={() => setLanguage('ro')}
            aria-label="Select Romanian"
            aria-pressed={language === 'ro'}
          >
            RO
          </button>
          <button
            type="button"
            className={`${styles.langBtn} ${language === 'en' ? styles.active : ''}`}
            onClick={() => setLanguage('en')}
            aria-label="Select English"
            aria-pressed={language === 'en'}
          >
            EN
          </button>
        </div>
        <Link
          href="/donate"
          className={`${ui.btn} ${ui.amber} ${styles.donate}`}
          aria-current={path === '/donate' ? 'page' : undefined}
        >
          {t.header.nav.donate}
        </Link>
        <button
          type="button"
          className={styles.menu}
          aria-label={language === 'ro' ? 'Meniu' : 'Menu'}
          aria-expanded={open}
          aria-controls="main-menu"
          onClick={() => setOpen(!open)}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>
    </header>
  );
};

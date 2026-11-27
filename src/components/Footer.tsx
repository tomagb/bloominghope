'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { organization } from '@/data/organization';
import { translations } from '@/data/translations';
import ui from '@/styles/ui.module.css';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className={styles.footer}>
      <div className={ui.wrap}>
        <div className={styles.cols}>
          <div>
            <h2 className={styles.title}>
              {language === 'ro' ? organization.name : 'Blooming Hope Association'}
            </h2>
            <p>{t.footer.motto}</p>
            <p>
              {t.donate.bank.taxIdLabel} {organization.taxId} · Cluj-Napoca
            </p>
          </div>
          <nav aria-label={t.footer.navigation}>
            <h2 className={styles.title}>{t.footer.navigation}</h2>
            <Link href="/">{t.header.nav.home}</Link>
            <Link href="/about">{t.header.nav.about}</Link>
            <Link href="/donate">{t.header.nav.donate}</Link>
            <Link href="/contact">{t.header.nav.contact}</Link>
          </nav>
          <div>
            <h2 className={styles.title}>{t.footer.info}</h2>
            <a href={`mailto:${t.footer.email}`}>{t.footer.email}</a>
            <Link href="/terms">{t.footer.terms}</Link>
            <Link href="/privacy">{t.footer.privacy}</Link>
            <Link href="/cookies">{t.footer.cookies}</Link>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>&copy; 2026 Blooming Hope. {t.footer.rights}</span>
          {/* Pictograma SAL (Ordinul ANPC 449/2022, modificat prin 270/2026) */}
          <a
            className={styles.sal}
            href="https://reclamatiisal.anpc.ro"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/anpc/sal.png"
              alt="ANPC - Soluționarea alternativă a litigiilor"
              width={201}
              height={50}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

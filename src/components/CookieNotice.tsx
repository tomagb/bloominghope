'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';
import styles from './CookieNotice.module.css';

const STORAGE_KEY = 'cookieNotice';

// Notă informativă: site-ul nu folosește cookie-uri neesențiale, deci nu cere consimțământ.
export const CookieNotice: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].cookieNotice;
  // Ascunsă până știm din browser dacă a mai fost închisă.
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      setVisible(localStorage.getItem(STORAGE_KEY) !== 'ok');
    } catch {
      setVisible(true);
    }
  }, []);

  const close = () => {
    setVisible(false);
    try {
      localStorage.setItem(STORAGE_KEY, 'ok');
    } catch {
      // Stocare blocată în browser: nota reapare la următoarea vizită.
    }
  };

  if (!visible) return null;

  return (
    <aside className={styles.notice} aria-label={t.label}>
      <p>
        {t.text} <Link href="/cookies">{t.link}</Link>
      </p>
      <button type="button" onClick={close}>
        {t.button}
      </button>
    </aside>
  );
};

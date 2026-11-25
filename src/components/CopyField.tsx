'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './CopyField.module.css';

interface CopyFieldProps {
  label: string;
  value: string;
  /** Textul pus în clipboard, dacă diferă de cel afișat. */
  copyValue?: string;
  hint?: string;
  large?: boolean;
  buttonLabels: { copy: string; copied: string; copyFailed: string };
}

export const CopyField: React.FC<CopyFieldProps> = ({
  label,
  value,
  copyValue = value,
  hint,
  large = false,
  buttonLabels,
}) => {
  const [status, setStatus] = useState<'copy' | 'copied' | 'copyFailed'>('copy');
  const timer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => () => clearTimeout(timer.current), []);

  const handleCopy = async () => {
    clearTimeout(timer.current);
    try {
      await navigator.clipboard.writeText(copyValue);
      setStatus('copied');
    } catch {
      setStatus('copyFailed');
    }
    timer.current = setTimeout(() => setStatus('copy'), 2000);
  };

  return (
    <div className={styles.row}>
      <div>
        <div className={styles.label}>{label}</div>
        <div className={`${styles.value} ${large ? styles.large : ''}`}>{value}</div>
        {hint && <p className={styles.hint}>{hint}</p>}
      </div>
      <button
        type="button"
        className={`${styles.button} ${status === 'copied' ? styles.copied : ''}`}
        onClick={handleCopy}
        aria-label={status === 'copy' ? `${buttonLabels.copy}: ${label}` : undefined}
      >
        <span aria-live="polite">{buttonLabels[status]}</span>
      </button>
    </div>
  );
};

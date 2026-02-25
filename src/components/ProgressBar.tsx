import React from 'react';
import styles from './ProgressBar.module.css';

interface ProgressBarProps {
  progress: number;
  color: 'emerald' | 'purple';
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ progress, color }) => {
  return (
    <div className={styles.container}>
      <div className={`${styles.bar} ${styles[color]}`}>
        <div
          className={styles.fill}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

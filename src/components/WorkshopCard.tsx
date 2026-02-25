import React from 'react';
import styles from './WorkshopCard.module.css';

interface WorkshopCardProps {
  title: string;
  description: string;
  index: number;
}

const icons = ['🔒', '💰', '🌱', '⚗️'];

export const WorkshopCard: React.FC<WorkshopCardProps> = ({
  title,
  description,
  index,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icons[index % icons.length]}</div>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

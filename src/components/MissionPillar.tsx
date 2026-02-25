import React from 'react';
import styles from './MissionPillar.module.css';

interface MissionPillarProps {
  title: string;
  description: string;
  index: number;
}

const icons = ['🎯', '🚀', '🤝', '💡', '❤️'];

export const MissionPillar: React.FC<MissionPillarProps> = ({
  title,
  description,
  index,
}) => {
  return (
    <div className={styles.pillar}>
      <div className={styles.icon}>{icons[index % icons.length]}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

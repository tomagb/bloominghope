import React from 'react';
import ui from '@/styles/ui.module.css';
import { Icon, IconName } from './Icon';

interface MissionPillarProps {
  title: string;
  description: string;
  index: number;
}

const icons: IconName[] = ['flag', 'briefcase', 'people', 'chip', 'heart'];

export const MissionPillar: React.FC<MissionPillarProps> = ({
  title,
  description,
  index,
}) => {
  return (
    <div className={ui.card}>
      <span className={ui.icon}>
        <Icon name={icons[index % icons.length]} />
      </span>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

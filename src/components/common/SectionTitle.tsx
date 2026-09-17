import React from 'react';
import styles from './SectionTitle.module.css';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
  className?: string;
}

export function SectionTitle({ title, subtitle, action, className = '' }: SectionTitleProps) {
  return (
    <div className={`${styles.header} ${className}`.trim()}>
      <div className={styles.left}>
        <h2 className={styles.title}>{title}</h2>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
      {action && <div className={styles.action}>{action}</div>}
    </div>
  );
}

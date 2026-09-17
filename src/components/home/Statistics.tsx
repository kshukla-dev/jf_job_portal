import React from 'react';
import { Container } from '@/components/common/Container';
import { portalStatistics } from '@/data/jobs';
import styles from './Statistics.module.css';

export function Statistics() {
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'briefcase':
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
          </svg>
        );
      case 'building':
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
            <path d="M6 12H4a2 2 0 0 0-2 2v8h4"></path>
            <path d="M18 9h2a2 2 0 0 1 2 2v11h-4"></path>
            <path d="M10 6h4"></path>
            <path d="M10 10h4"></path>
            <path d="M10 14h4"></path>
            <path d="M10 18h4"></path>
          </svg>
        );
      case 'globe':
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          </svg>
        );
      case 'smile':
      default:
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
          </svg>
        );
    }
  };

  return (
    <section className={styles.statsSection} aria-label="Portal Statistics">
      <Container>
        <div className={styles.grid}>
          {portalStatistics.map((stat) => (
            <div key={stat.id} className={styles.item}>
              <div className={styles.iconBox} aria-hidden="true">
                {renderIcon(stat.icon)}
              </div>
              <div className={styles.content}>
                <span className={styles.value}>{stat.value}</span>
                <span className={styles.label}>{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

import React from 'react';
import { Country } from '@/types/country';
import styles from './CountryDetails.module.css';

interface CountryDetailsProps {
  country: Country;
}

export function CountryDetails({ country }: CountryDetailsProps) {
  return (
    <div className={styles.detailsGrid}>
      <div className={styles.card}>
        <h2 className={styles.sectionTitle}>Employment Market & Relocation Insights</h2>
        <p className={styles.text}>{country.description}</p>

        <h3 className={styles.sectionTitle}>Visa & Work Authorization Options</h3>
        <p className={styles.text}>{country.visaInfo || 'Standard international work sponsorship applies.'}</p>
      </div>

      <aside className={styles.sidebarCard}>
        <h3 className={styles.sectionTitle}>Quick Facts</h3>
        
        <div className={styles.infoItem}>
          <div className={styles.infoLabel}>Region</div>
          <div className={styles.infoVal}>{country.region}</div>
        </div>

        <div className={styles.infoItem}>
          <div className={styles.infoLabel}>Active Portal Opportunities</div>
          <div className={styles.infoVal}>{country.activeJobs}+ open roles</div>
        </div>

        {country.averageSalary && (
          <div className={styles.infoItem}>
            <div className={styles.infoLabel}>Average Mid-Senior Salary</div>
            <div className={styles.infoVal}>{country.averageSalary}</div>
          </div>
        )}

        <div className={styles.infoItem}>
          <div className={styles.infoLabel}>Key Employment Metros</div>
          <div className={styles.infoVal}>{country.featuredCities.join(', ')}</div>
        </div>
      </aside>
    </div>
  );
}

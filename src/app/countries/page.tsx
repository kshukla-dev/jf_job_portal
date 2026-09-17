import React from 'react';
import { Container } from '@/components/common/Container';
import { CountryList } from '@/components/countries/CountryList';
import { countriesData } from '@/data/countries';
import styles from './countries.module.css';

export default function CountriesPage() {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <Container>
          <h1 className={styles.title}>Global Operating Destinations</h1>
          <p className={styles.subtitle}>
            Jackson & Frank operates across 50+ countries. Select a destination to review specialized local recruitment ecosystems, visa insights, and active roles.
          </p>
        </Container>
      </div>

      <Container>
        <CountryList countries={countriesData} />
      </Container>
    </div>
  );
}

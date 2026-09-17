import React from 'react';
import { Country } from '@/types/country';
import { CountryCard } from './CountryCard';
import styles from './CountryList.module.css';

interface CountryListProps {
  countries: Country[];
}

export function CountryList({ countries }: CountryListProps) {
  return (
    <div className={styles.grid}>
      {countries.map((country) => (
        <CountryCard key={country.code} country={country} />
      ))}
    </div>
  );
}

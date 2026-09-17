import React from 'react';
import Link from 'next/link';
import { Country } from '@/types/country';
import styles from './CountryCard.module.css';

interface CountryCardProps {
  country: Country;
}

export function CountryCard({ country }: CountryCardProps) {
  return (
    <Link href={`/countries/${country.slug}`} className={styles.card}>
      <div className={styles.topRow}>
        <span className={styles.flagEmoji} role="img" aria-label={`${country.name} flag`}>
          {country.flagEmoji}
        </span>
        <span className={styles.badge}>{country.activeJobs}+ jobs</span>
      </div>

      <h3 className={styles.countryName}>{country.name}</h3>
      <span className={styles.region}>{country.region}</span>
      <p className={styles.description}>{country.description}</p>

      <div className={styles.cities}>
        <span>Key hubs: </span>
        <span className={styles.cityTag}>{country.featuredCities.slice(0, 3).join(', ')}</span>
      </div>
    </Link>
  );
}

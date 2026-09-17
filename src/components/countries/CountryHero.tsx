import React from 'react';
import { Container } from '@/components/common/Container';
import styles from './CountryHero.module.css';

interface CountryHeroProps {
  countryName: string;
  flagEmoji: string;
  region: string;
  description: string;
}

export function CountryHero({ countryName, flagEmoji, region, description }: CountryHeroProps) {
  return (
    <section className={styles.hero}>
      <Container>
        <span className={styles.eyebrow}>{region}</span>
        <h1 className={styles.title}>
          <span>{flagEmoji}</span>
          <span>Careers in {countryName}</span>
        </h1>
        <p className={styles.description}>{description}</p>
      </Container>
    </section>
  );
}

import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/common/Container';
import { categoriesByTab } from '@/data/industries';
import styles from './industries.module.css';

export default function IndustriesPage() {
  const industries = categoriesByTab['By Industry'];

  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <Container>
          <h1 className={styles.title}>Specialized Industry Sectors</h1>
          <p className={styles.subtitle}>
            Jackson & Frank delivers specialized executive search and technical staffing solutions across key global industries.
          </p>
        </Container>
      </div>

      <Container>
        <div className={styles.grid}>
          {industries.map((ind) => (
            <Link
              key={ind.id}
              href={`/vacancies?category=${ind.id}`}
              className={styles.card}
            >
              <h2 className={styles.cardTitle}>{ind.title}</h2>
              <span className={styles.cardCount}>{ind.jobCount}</span>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}

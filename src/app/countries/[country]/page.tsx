import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Container } from '@/components/common/Container';
import { CountryHero } from '@/components/countries/CountryHero';
import { CountryDetails } from '@/components/countries/CountryDetails';
import { JobGrid } from '@/components/jobs/JobGrid';
import { getCountryBySlug, getAllJobs } from '@/lib/api';
import styles from './country-details.module.css';

export default async function CountryPage({
  params,
}: {
  params: Promise<{ country: string }>;
}) {
  const { country: slug } = await params;
  const country = await getCountryBySlug(slug);

  if (!country) {
    notFound();
  }

  const allJobs = await getAllJobs();
  const countryJobs = allJobs.filter(
    (j) => j.country.toLowerCase() === country.name.toLowerCase()
  );

  return (
    <div className={styles.page}>
      <CountryHero
        countryName={country.name}
        flagEmoji={country.flagEmoji}
        region={country.region}
        description={country.description}
      />

      <Container>
        <Link href="/countries" className={styles.backLink}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          <span>Back to all destinations</span>
        </Link>

        <CountryDetails country={country} />

        <div className={styles.jobsSection}>
          <h2 className={styles.sectionTitle}>
            Open Opportunities in {country.name} ({countryJobs.length})
          </h2>
          <JobGrid jobs={countryJobs} />
        </div>
      </Container>
    </div>
  );
}

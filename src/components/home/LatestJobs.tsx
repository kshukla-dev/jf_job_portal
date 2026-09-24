import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/common/Container';
import { SectionTitle } from '@/components/common/SectionTitle';
import { JobCard } from '@/components/jobs/JobCard';
import { getAllJobs } from '@/lib/api';
import styles from './LatestJobs.module.css';

export async function LatestJobs() {
  // Fetch real jobs from OTYS API (showing 4 on landing page)
  const jobs = await getAllJobs({ itemsPerPage: 4 });
  const displayJobs = jobs.slice(0, 4);

  return (
    <section className={styles.section} aria-label="Latest Job Opportunities">
      <Container>
        <SectionTitle
          title="Latest Job Opportunities"
          subtitle="Discover roles that match your skills and career goals."
          action={
            <Link href="/vacancies" className={styles.viewAllLink}>
              <span>View All Jobs</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          }
        />

        <div className={styles.grid}>
          {displayJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </Container>
    </section>
  );
}

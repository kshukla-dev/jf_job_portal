import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Container } from '@/components/common/Container';
import { JobDetails } from '@/components/jobs/JobDetails';
import { getJobBySlug } from '@/lib/api';
import styles from './vacancy-details.module.css';

export default async function VacancyDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = await getJobBySlug(slug);

  if (!job) {
    notFound();
  }

  return (
    <div className={styles.page}>
      <Container>
        <Link href="/vacancies" className={styles.backLink}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          <span>Back to all vacancies</span>
        </Link>

        <JobDetails job={job} />
      </Container>
    </div>
  );
}

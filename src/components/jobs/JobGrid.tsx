import React from 'react';
import { Job } from '@/types/job';
import { JobCard } from './JobCard';
import styles from './JobGrid.module.css';

interface JobGridProps {
  jobs: Job[];
}

export function JobGrid({ jobs }: JobGridProps) {
  if (jobs.length === 0) {
    return (
      <div className={styles.emptyState}>
        <h3 className={styles.emptyTitle}>No matching jobs found</h3>
        <p className={styles.emptyText}>
          Try adjusting your search criteria, industry filters, or location parameters.
        </p>
      </div>
    );
  }

  return (
    <div className={styles.grid}>
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}

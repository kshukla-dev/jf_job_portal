'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Job } from '@/types/job';
import { Button } from '@/components/common/Button';
import styles from './JobDetails.module.css';

interface JobDetailsProps {
  job: Job;
}

export function JobDetails({ job }: JobDetailsProps) {
  const [applied, setApplied] = useState(false);

  return (
    <article className={styles.wrapper}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.titleGroup}>
          <div className={styles.companyRow}>
            <Image
              src={job.companyLogo}
              alt={`${job.company} logo`}
              width={100}
              height={32}
              className={styles.companyLogo}
            />
            <span className={styles.companyName}>{job.company}</span>
          </div>

          <h1 className={styles.title}>{job.title}</h1>

          <div className={styles.metaGrid}>
            <div className={styles.metaItem}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>{job.location}</span>
            </div>

            <div className={styles.metaItem}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
              <span>{job.type}</span>
            </div>

            <div className={styles.metaItem}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span>{job.experience}</span>
            </div>
          </div>
        </div>

        {/* Apply CTA Card */}
        <div className={styles.applyCard}>
          {job.salary && <span className={styles.salary}>{job.salary}</span>}
          <Button
            size="lg"
            variant="primary"
            onClick={() => setApplied(true)}
            disabled={applied}
          >
            {applied ? 'Application Submitted ✓' : 'Apply For Position'}
          </Button>
        </div>
      </div>

      {/* Description */}
      {job.description && (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Overview & Role Mission</h2>
          <p className={styles.description}>{job.description}</p>
        </section>
      )}

      {/* Key Responsibilities */}
      {job.responsibilities && job.responsibilities.length > 0 && (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Key Responsibilities</h2>
          <ul className={styles.list}>
            {job.responsibilities.map((resp, idx) => (
              <li key={idx}>{resp}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Requirements */}
      {job.requirements && job.requirements.length > 0 && (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Candidate Qualifications</h2>
          <ul className={styles.list}>
            {job.requirements.map((req, idx) => (
              <li key={idx}>{req}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Skills */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Required Technical Competencies</h2>
        <div className={styles.skillsWrap}>
          {job.skills.map((skill) => (
            <span key={skill} className={styles.skillPill}>
              {skill}
            </span>
          ))}
        </div>
      </section>
    </article>
  );
}

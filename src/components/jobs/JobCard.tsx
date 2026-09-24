'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Job } from '@/types/job';
import styles from './JobCard.module.css';

interface JobCardProps {
  job: Job;
}

export function JobCard({ job }: JobCardProps) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showAllSkills, setShowAllSkills] = useState(false);

  return (
    <article className={styles.card}>
      {/* Header: Type / Salary Badges & Bookmark */}
      <div className={styles.header}>
        <div className={styles.badgeGroup}>
          <span className={styles.typeBadge}>{job.type}</span>
          {job.salary && (
            <span className={styles.salaryBadge}>{job.salary}</span>
          )}
        </div>

        <button
          className={`${styles.bookmarkBtn} ${isBookmarked ? styles.bookmarked : ''}`}
          onClick={() => setIsBookmarked(!isBookmarked)}
          aria-label={isBookmarked ? 'Remove bookmark' : 'Bookmark job'}
          title={isBookmarked ? 'Saved' : 'Save job'}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill={isBookmarked ? 'currentColor' : 'none'}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
        </button>
      </div>

      {/* Job Title & Company */}
      <Link href={`/vacancies/${job.slug}`} className={styles.titleLink}>
        <h3 className={styles.title}>{job.title}</h3>
      </Link>
      <p className={styles.companyName}>{job.company}</p>

      {/* Metadata */}
      <div className={styles.metadata}>
        <div className={styles.metaRow}>
          <div className={styles.metaItem}>
            <svg className={styles.metaIcon} width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span>{job.location}</span>
          </div>

          <div className={styles.metaItem}>
            <svg className={styles.metaIcon} width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span>{job.experience}</span>
          </div>
        </div>
      </div>

      {/* Skills (Max 3 visible by default, expandable with Show More) */}
      {job.skills && job.skills.length > 0 && (
        <div className={styles.skillsList} aria-label="Required skills">
          {(showAllSkills ? job.skills : job.skills.slice(0, 3)).map((skill, idx) => (
            <span key={`${skill}-${idx}`} className={styles.skillBadge}>
              {skill}
            </span>
          ))}

          {job.skills.length > 3 && (
            <button
              type="button"
              className={styles.moreSkillsBtn}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setShowAllSkills(!showAllSkills);
              }}
              title={showAllSkills ? 'Show fewer skills' : 'Show all skills'}
            >
              {showAllSkills ? 'Show less' : `+${job.skills.length - 3} more`}
            </button>
          )}
        </div>
      )}

      {/* Footer: Posted time & View Job button */}
      <div className={styles.footer}>
        <span className={styles.postedTime}>{job.postedTime}</span>
        <Link href={`/vacancies/${job.slug}`} className={styles.viewJobBtn}>
          <span>View Job</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </Link>
      </div>
    </article>
  );
}

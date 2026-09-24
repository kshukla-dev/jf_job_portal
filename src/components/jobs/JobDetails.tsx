'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Job } from '@/types/job';
import { cleanRichHtml, translateDutchToEnglish } from '@/lib/utils';
import styles from './JobDetails.module.css';

interface JobDetailsProps {
  job: Job;
}

/**
 * Expandable Content Component
 * Truncates long text or lists with a graceful gradient fade and "Show more / Show less" toggle
 */
function ExpandableContent({
  children,
  maxHeight = 280,
}: {
  children: React.ReactNode;
  maxHeight?: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = contentRef.current;
    if (el) {
      if (el.scrollHeight > maxHeight + 40) {
        setIsOverflowing(true);
      } else {
        setIsOverflowing(false);
      }
    }
  }, [children, maxHeight]);

  return (
    <div className={styles.expandableWrapper}>
      <div
        ref={contentRef}
        className={`${styles.expandableContent} ${!expanded && isOverflowing ? styles.isCollapsed : ''}`}
        style={{
          maxHeight: expanded || !isOverflowing ? 'none' : `${maxHeight}px`,
        }}
      >
        {children}
      </div>

      {isOverflowing && (
        <div className={styles.showMoreContainer}>
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className={styles.showMoreToggle}
            aria-expanded={expanded}
          >
            <span>{expanded ? 'Show less' : 'Show more'}</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`${styles.chevronIcon} ${expanded ? styles.chevronRotated : ''}`}
              aria-hidden="true"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}

export function JobDetails({ job }: JobDetailsProps) {
  const [applied, setApplied] = useState(false);
  const [saved, setSaved] = useState(false);
  const [copied, setCopied] = useState(false);

  // English translation and content cleaning
  const cleanedOverview = cleanRichHtml(job.overviewHtml);
  const cleanedJobDesc = cleanRichHtml(job.jobDescriptionHtml);
  const cleanedRequirements = cleanRichHtml(job.requirementsHtml);
  const cleanedBenefits = cleanRichHtml(job.benefitsHtml);
  const cleanedCompanyProfile = cleanRichHtml(job.companyProfileHtml);

  const displayType = translateDutchToEnglish(job.type || 'Permanent');
  const displayHours = translateDutchToEnglish(job.hoursPerWeek || '');
  const displayLanguage = translateDutchToEnglish(job.language || '');
  const displayEducation = translateDutchToEnglish(job.education || '');

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleApplyClick = () => {
    if (job.customApplyUrl) {
      window.open(job.customApplyUrl, '_blank', 'noopener,noreferrer');
    } else {
      setApplied(true);
    }
  };

  return (
    <div className={styles.container}>
      {/* 1. Breadcrumbs */}
      <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
        <Link href="/" className={styles.breadcrumbLink}>Home</Link>
        <span className={styles.breadcrumbSeparator}>/</span>
        <Link href="/vacancies" className={styles.breadcrumbLink}>Vacancies</Link>
        <span className={styles.breadcrumbSeparator}>/</span>
        <span className={styles.breadcrumbCurrent}>{job.title}</span>
      </nav>

      {/* 2. Top Header Hero Card */}
      <header className={styles.heroCard}>
        <div className={styles.heroMain}>
          <div className={styles.badgeRow}>
            <span className={styles.typeBadge}>{displayType}</span>
            {job.salary && <span className={styles.salaryBadge}>{job.salary}</span>}
            {displayHours && <span className={styles.hoursBadge}>{displayHours}</span>}
            {displayLanguage && <span className={styles.langBadge}>{displayLanguage}</span>}
          </div>


          <h1 className={styles.jobTitle}>{job.title}</h1>

          <div className={styles.metaRow}>
            <div className={styles.metaItem}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <span>{job.company}</span>
            </div>

            <div className={styles.metaItem}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>{job.location}</span>
            </div>

            <div className={styles.metaItem}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span>Posted {job.postedTime}</span>
            </div>

            {job.industry && (
              <div className={styles.metaItem}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
                <span>{job.industry}</span>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className={styles.heroActions}>
          <button
            type="button"
            onClick={handleApplyClick}
            className={`${styles.applyBtn} ${applied ? styles.appliedBtn : ''}`}
            disabled={applied && !job.customApplyUrl}
          >
            {applied && !job.customApplyUrl ? (
              <>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Application Submitted</span>
              </>
            ) : (
              <>
                <span>Apply for Position</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </>
            )}
          </button>

          <div className={styles.subActions}>
            <button
              type="button"
              onClick={() => setSaved(!saved)}
              className={`${styles.iconActionBtn} ${saved ? styles.savedActive : ''}`}
              title={saved ? 'Job Saved' : 'Save Job'}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill={saved ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
              <span>{saved ? 'Saved' : 'Save'}</span>
            </button>

            <button
              type="button"
              onClick={handleShare}
              className={styles.iconActionBtn}
              title="Share Vacancy"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="18" cy="5" r="3"></circle>
                <circle cx="6" cy="12" r="3"></circle>
                <circle cx="18" cy="19" r="3"></circle>
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
              </svg>
              <span>{copied ? 'Copied!' : 'Share'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* 3. Two-Column Layout */}
      <div className={styles.layout}>
        {/* Main Content (Left Column) */}
        <main className={styles.mainColumn}>
          {/* Section: Overview / Role Summary */}
          {(cleanedOverview || job.description) && (
            <section className={styles.cardSection}>
              <div className={styles.sectionHeader}>
                <div className={styles.sectionIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                  </svg>
                </div>
                <h2 className={styles.sectionTitle}>Overview & Role Summary</h2>
              </div>

              {cleanedOverview ? (
                <div
                  className={styles.richContent}
                  dangerouslySetInnerHTML={{ __html: cleanedOverview }}
                />
              ) : (
                <p className={styles.plainText}>{job.description}</p>
              )}
            </section>
          )}

          {/* Section: Job Description & Responsibilities (with Show More) */}
          {(cleanedJobDesc || (job.responsibilities && job.responsibilities.length > 0)) && (
            <section className={styles.cardSection}>
              <div className={styles.sectionHeader}>
                <div className={styles.sectionIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                </div>
                <h2 className={styles.sectionTitle}>Job Description & Key Responsibilities</h2>
              </div>

              <ExpandableContent maxHeight={280}>
                {cleanedJobDesc ? (
                  <div
                    className={styles.richContent}
                    dangerouslySetInnerHTML={{ __html: cleanedJobDesc }}
                  />
                ) : (
                  <ul className={styles.bulletList}>
                    {job.responsibilities?.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                )}
              </ExpandableContent>
            </section>
          )}

          {/* Section: Candidate Requirements (with Show More) */}
          {(cleanedRequirements || (job.requirements && job.requirements.length > 0)) && (
            <section className={styles.cardSection}>
              <div className={styles.sectionHeader}>
                <div className={styles.sectionIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <h2 className={styles.sectionTitle}>Candidate Requirements & Qualifications</h2>
              </div>

              <ExpandableContent maxHeight={280}>
                {cleanedRequirements ? (
                  <div
                    className={styles.richContent}
                    dangerouslySetInnerHTML={{ __html: cleanedRequirements }}
                  />
                ) : (
                  <ul className={styles.bulletList}>
                    {job.requirements?.map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ul>
                )}
              </ExpandableContent>
            </section>
          )}

          {/* Section: Compensation & Benefits */}
          {cleanedBenefits && (
            <section className={styles.cardSection}>
              <div className={styles.sectionHeader}>
                <div className={styles.sectionIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 12 20 22 4 22 4 12"></polyline>
                    <rect x="2" y="7" width="20" height="5"></rect>
                    <line x1="12" y1="22" x2="12" y2="7"></line>
                    <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
                    <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
                  </svg>
                </div>
                <h2 className={styles.sectionTitle}>Benefits & Perks</h2>
              </div>

              <div
                className={styles.richContent}
                dangerouslySetInnerHTML={{ __html: cleanedBenefits }}
              />
            </section>
          )}

          {/* Section: Company Profile */}
          {cleanedCompanyProfile && (
            <section className={styles.cardSection}>
              <div className={styles.sectionHeader}>
                <div className={styles.sectionIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 21h18"></path>
                    <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"></path>
                    <line x1="9" y1="9" x2="9.01" y2="9"></line>
                    <line x1="15" y1="9" x2="15.01" y2="9"></line>
                    <line x1="9" y1="13" x2="9.01" y2="13"></line>
                    <line x1="15" y1="13" x2="15.01" y2="13"></line>
                  </svg>
                </div>
                <h2 className={styles.sectionTitle}>About the Employer & Team Culture</h2>
              </div>

              <div
                className={styles.richContent}
                dangerouslySetInnerHTML={{ __html: cleanedCompanyProfile }}
              />
            </section>
          )}

          {/* Section: Technical Competencies & Skills */}
          {job.skills && job.skills.length > 0 && (
            <section className={styles.cardSection}>
              <div className={styles.sectionHeader}>
                <div className={styles.sectionIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                    <polyline points="2 17 12 22 22 17"></polyline>
                    <polyline points="2 12 12 17 22 12"></polyline>
                  </svg>
                </div>
                <h2 className={styles.sectionTitle}>Required Skills & Technical Competencies</h2>
              </div>

              <div className={styles.skillsCloud}>
                {job.skills.map((skill, idx) => (
                  <span key={`${skill}-${idx}`} className={styles.skillPill}>
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Bottom Apply Box */}
          <div className={styles.bottomApplyBox}>
            <div className={styles.bottomApplyContent}>
              <h3 className={styles.bottomApplyTitle}>Interested in this opportunity?</h3>
              <p className={styles.bottomApplyDesc}>
                Take the next step in your career. Submit your application today and our recruitment team will review your qualifications.
              </p>
            </div>
            <button
              type="button"
              onClick={handleApplyClick}
              className={styles.applyBtn}
              disabled={applied && !job.customApplyUrl}
            >
              {applied && !job.customApplyUrl ? 'Application Submitted ✓' : 'Apply Now'}
            </button>
          </div>
        </main>

        {/* Sidebar (Right Column) */}
        <aside className={styles.sidebar}>
          {/* Card 1: Job Summary Information */}
          <div className={styles.sidebarCard}>
            <h3 className={styles.sidebarTitle}>Job Overview</h3>

            <div className={styles.overviewList}>
              {job.salary && (
                <div className={styles.overviewItem}>
                  <div className={styles.overviewIconWrap}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="1" x2="12" y2="23"></line>
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                    </svg>
                  </div>
                  <div>
                    <span className={styles.overviewLabel}>Salary / Rate</span>
                    <span className={styles.overviewValue}>{job.salary}</span>
                  </div>
                </div>
              )}

              <div className={styles.overviewItem}>
                <div className={styles.overviewIconWrap}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                </div>
                <div>
                  <span className={styles.overviewLabel}>Employment Type</span>
                  <span className={styles.overviewValue}>{displayType}</span>
                </div>
              </div>

              {displayHours && (
                <div className={styles.overviewItem}>
                  <div className={styles.overviewIconWrap}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                  <div>
                    <span className={styles.overviewLabel}>Hours / Week</span>
                    <span className={styles.overviewValue}>{displayHours}</span>
                  </div>
                </div>
              )}

              <div className={styles.overviewItem}>
                <div className={styles.overviewIconWrap}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <span className={styles.overviewLabel}>Location</span>
                  <span className={styles.overviewValue}>{job.location}</span>
                </div>
              </div>

              {job.role && (
                <div className={styles.overviewItem}>
                  <div className={styles.overviewIconWrap}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                      <polyline points="2 17 12 22 22 17"></polyline>
                    </svg>
                  </div>
                  <div>
                    <span className={styles.overviewLabel}>Role / Function</span>
                    <span className={styles.overviewValue}>{job.role}</span>
                  </div>
                </div>
              )}

              {displayEducation && (
                <div className={styles.overviewItem}>
                  <div className={styles.overviewIconWrap}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                      <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                    </svg>
                  </div>
                  <div>
                    <span className={styles.overviewLabel}>Education Level</span>
                    <span className={styles.overviewValue}>{displayEducation}</span>
                  </div>
                </div>
              )}

              {displayLanguage && (
                <div className={styles.overviewItem}>
                  <div className={styles.overviewIconWrap}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                  </div>
                  <div>
                    <span className={styles.overviewLabel}>Language</span>
                    <span className={styles.overviewValue}>{displayLanguage}</span>
                  </div>
                </div>
              )}

              {job.region && (
                <div className={styles.overviewItem}>
                  <div className={styles.overviewIconWrap}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
                      <line x1="8" y1="2" x2="8" y2="18"></line>
                      <line x1="16" y1="6" x2="16" y2="22"></line>
                    </svg>
                  </div>
                  <div>
                    <span className={styles.overviewLabel}>Region</span>
                    <span className={styles.overviewValue}>{job.region}</span>
                  </div>
                </div>
              )}

              <div className={styles.overviewItem}>
                <div className={styles.overviewIconWrap}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                </div>
                <div>
                  <span className={styles.overviewLabel}>Date Posted</span>
                  <span className={styles.overviewValue}>{job.postedTime}</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={handleApplyClick}
              className={styles.sidebarApplyBtn}
              disabled={applied && !job.customApplyUrl}
            >
              {applied && !job.customApplyUrl ? 'Applied ✓' : 'Apply Now'}
            </button>
          </div>

          {/* Card 2: Hiring Consultant Card (When available from OTYS) */}
          {job.consultant && job.consultant.name && (
            <div className={styles.sidebarCard}>
              <h3 className={styles.sidebarTitle}>Hiring Consultant</h3>

              <div className={styles.consultantHeader}>
                {job.consultant.avatar ? (
                  <img
                    src={job.consultant.avatar}
                    alt={job.consultant.name}
                    className={styles.consultantAvatar}
                  />
                ) : (
                  <div className={styles.consultantAvatarFallback}>
                    {job.consultant.name.charAt(0)}
                  </div>
                )}
                <div>
                  <h4 className={styles.consultantName}>{job.consultant.name}</h4>
                  <p className={styles.consultantRole}>{job.consultant.title}</p>
                </div>
              </div>

              <p className={styles.consultantText}>
                Have questions or need more details about this vacancy? Feel free to reach out directly.
              </p>

              <div className={styles.consultantActions}>
                {job.consultant.email && (
                  <a
                    href={`mailto:${job.consultant.email}?subject=Inquiry regarding: ${job.title}`}
                    className={styles.consultantContactBtn}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    <span>Send Email</span>
                  </a>
                )}

                {job.consultant.phone && (
                  <a
                    href={`tel:${job.consultant.phone}`}
                    className={styles.consultantPhoneBtn}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <span>{job.consultant.phone}</span>
                  </a>
                )}
              </div>
            </div>
          )}

          {/* Card 3: Back to Search / Vacancies */}
          <div className={styles.sidebarCard}>
            <h4 className={styles.sidebarSubTitle}>Looking for other roles?</h4>
            <p className={styles.sidebarText}>
              Explore our wide range of global tech and consulting opportunities.
            </p>
            <Link href="/vacancies" className={styles.allVacanciesLink}>
              <span>Browse All Vacancies</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}

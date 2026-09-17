import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/common/Container';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.topGrid}>
          {/* Brand Info */}
          <div className={styles.brandCol}>
            <Image
              src="/images/logos/logo-dark.svg"
              alt="Jackson & Frank"
              width={200}
              height={32}
              className={styles.logoImage}
            />
            <p className={styles.brandDesc}>
              Jackson & Frank is a premier international recruitment consultancy connecting top-tier talent with world-leading enterprises across 50+ countries. Build your career without borders.
            </p>
            <div className={styles.socials}>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="X (formerly Twitter)">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Candidates */}
          <div>
            <h3 className={styles.colTitle}>Candidates</h3>
            <ul className={styles.linkList}>
              <li className={styles.linkItem}><Link href="/jobs">Jobs Worldwide</Link></li>
              <li className={styles.linkItem}><Link href="/vacancies">Latest Vacancies</Link></li>
              <li className={styles.linkItem}><Link href="/career-advice">Career Advice</Link></li>
              <li className={styles.linkItem}><Link href="/job-alert">Job Alert</Link></li>
            </ul>
          </div>

          {/* Employers */}
          <div>
            <h3 className={styles.colTitle}>Employers</h3>
            <ul className={styles.linkList}>
              <li className={styles.linkItem}><Link href="/employers">Hire Talent</Link></li>
              <li className={styles.linkItem}><Link href="/countries">Global Presence</Link></li>
              <li className={styles.linkItem}><Link href="/contact">Executive Search</Link></li>
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h3 className={styles.colTitle}>Countries</h3>
            <ul className={styles.linkList}>
              <li className={styles.linkItem}><Link href="/countries/netherlands">Netherlands</Link></li>
              <li className={styles.linkItem}><Link href="/countries/germany">Germany</Link></li>
              <li className={styles.linkItem}><Link href="/countries/india">India</Link></li>
              <li className={styles.linkItem}><Link href="/countries/poland">Poland</Link></li>
              <li className={styles.linkItem}><Link href="/countries">All Countries</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className={styles.colTitle}>Company</h3>
            <ul className={styles.linkList}>
              <li className={styles.linkItem}><Link href="/about">About Us</Link></li>
              <li className={styles.linkItem}><Link href="/blog">Blogs</Link></li>
              <li className={styles.linkItem}><Link href="/news">News</Link></li>
              <li className={styles.linkItem}><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p>© {new Date().getFullYear()} Jackson & Frank. All rights reserved.</p>
          <div className={styles.bottomLinks}>
            <Link href="/about">Privacy Policy</Link>
            <Link href="/about">Terms of Service</Link>
            <Link href="/about">Cookie Preferences</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

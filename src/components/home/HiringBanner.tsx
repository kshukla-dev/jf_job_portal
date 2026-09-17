import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './HiringBanner.module.css';

export function HiringBanner() {
  return (
    <div className={styles.hiringCard}>
      <div className={styles.imageWrapper}>
        <Image
          src="/images/banners/hiring-talent.jpg"
          alt="Professional hiring talent with Jackson & Frank"
          fill
          sizes="(max-width: 768px) 100vw, 30vw"
          className={styles.image}
        />
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>
          Looking to hire<br />
          top talent?
        </h3>
        <p className={styles.description}>
          Partner with Jackson & Frank to find the right talent, anywhere in the world.
        </p>
        <Link href="/employers" className={styles.btn}>
          <span>Hire Talent</span>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </Link>
      </div>
    </div>
  );
}

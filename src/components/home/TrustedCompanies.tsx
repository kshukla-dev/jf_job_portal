import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/common/Container';
import styles from './TrustedCompanies.module.css';

interface CompanyLogoItem {
  name: string;
  src: string;
  width: number;
}

const companies: CompanyLogoItem[] = [
  { name: 'ASML', src: '/images/logos/asml.svg', width: 75 },
  { name: 'ING', src: '/images/logos/ing.svg', width: 70 },
  { name: 'Booking.com', src: '/images/logos/booking.svg', width: 100 },
  { name: 'TATA', src: '/images/logos/tata.svg', width: 60 },
  { name: 'Adyen', src: '/images/logos/adyen.svg', width: 70 },
  { name: 'PHILIPS', src: '/images/logos/philips.svg', width: 75 },
  { name: 'Shell', src: '/images/logos/shell.svg', width: 45 },
  { name: 'Randstad', src: '/images/logos/randstad.svg', width: 90 },
];

export function TrustedCompanies() {
  return (
    <section className={styles.trustedSection} aria-label="Trusted Companies">
      <Container>
        <div className={styles.inner}>
          {/* Label on left */}
          <span className={styles.label}>Trusted by leading companies</span>

          {/* Logos strip */}
          <div className={styles.logoTrack} role="list" aria-label="Partner Companies">
            {companies.map((company) => (
              <div key={company.name} className={styles.logoItem} role="listitem">
                <Image
                  src={company.src}
                  alt={`${company.name} logo`}
                  width={company.width}
                  height={26}
                  className={styles.companyLogo}
                />
              </div>
            ))}
          </div>

          {/* Right separator & View all link */}
          <div className={styles.rightCol}>
            <div className={styles.divider} aria-hidden="true" />
            <Link href="/employers" className={styles.viewAll}>
              <span>View all companies</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

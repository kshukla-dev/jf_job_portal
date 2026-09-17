'use client';

import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/common/Container';
import { filterChips } from '@/data/jobs';
import styles from './PopularFilters.module.css';

interface PopularFiltersProps {
  activeFilter?: string;
  onSelectFilter?: (filterId: string) => void;
  targetPath?: string;
}

export function PopularFilters({
  activeFilter = '',
  onSelectFilter,
  targetPath = '/vacancies',
}: PopularFiltersProps = {}) {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.inner}>
          <div className={styles.chipsList} role="list" aria-label="Popular Filters">
            {filterChips.map((chip) => {
              const isActive = activeFilter.toLowerCase() === chip.id.toLowerCase();
              if (onSelectFilter) {
                return (
                  <button
                    key={chip.id}
                    type="button"
                    onClick={() => onSelectFilter(isActive ? '' : chip.id)}
                    className={`${styles.chip} ${isActive ? styles.chipActive : ''}`}
                  >
                    {chip.label}
                  </button>
                );
              }

              return (
                <Link
                  key={chip.id}
                  href={`${targetPath}?filter=${chip.id}`}
                  className={`${styles.chip} ${isActive ? styles.chipActive : ''}`}
                >
                  {chip.label}
                </Link>
              );
            })}
          </div>

          <Link href={`${targetPath}?advanced=true`} className={styles.advancedLink}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" y1="21" x2="4" y2="14"></line>
              <line x1="4" y1="10" x2="4" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12" y2="3"></line>
              <line x1="20" y1="21" x2="20" y2="16"></line>
              <line x1="20" y1="12" x2="20" y2="3"></line>
              <line x1="1" y1="14" x2="7" y2="14"></line>
              <line x1="9" y1="8" x2="15" y2="8"></line>
              <line x1="17" y1="16" x2="23" y2="16"></line>
            </svg>
            <span>Advanced Search</span>
          </Link>
        </div>
      </Container>
    </div>
  );
}

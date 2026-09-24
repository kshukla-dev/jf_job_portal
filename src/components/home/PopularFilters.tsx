'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Container } from '@/components/common/Container';
import { filterChips } from '@/data/jobs';
import styles from './PopularFilters.module.css';

interface PopularFiltersProps {
  activeFilter?: string;
  onSelectFilter?: (filterId: string) => void;
  onClear?: () => void;
  targetPath?: string;
}

export function PopularFilters({
  activeFilter = '',
  onSelectFilter,
  onClear,
  targetPath = '/vacancies',
}: PopularFiltersProps = {}) {
  const router = useRouter();
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

          <div className={styles.rightActions}>
            <button
              type="button"
              onClick={() => {
                if (onClear) {
                  onClear();
                } else if (onSelectFilter) {
                  onSelectFilter('');
                } else {
                  router.push(targetPath);
                }
              }}
              className={`${styles.clearFilterBtn} ${activeFilter ? styles.clearFilterBtnActive : ''}`}
              title="Clear selected filter"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
              <span>Clear Filter</span>
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}

/*  */'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Container } from '@/components/common/Container';
import styles from './JobSearch.module.css';

interface JobSearchProps {
  initialKeyword?: string;
  initialLocation?: string;
  initialJobType?: string;
  onSearch?: (criteria: { keyword: string; location: string; jobType: string }) => void;
  targetPath?: string;
}

export function JobSearch({
  initialKeyword = '',
  initialLocation = '',
  initialJobType = 'All types',
  onSearch,
  targetPath = '/vacancies',
}: JobSearchProps = {}) {
  const router = useRouter();
  const [keyword, setKeyword] = useState(initialKeyword);
  const [location, setLocation] = useState(initialLocation);
  const [jobType, setJobType] = useState(initialJobType);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const jobTypeOptions = [
    { value: 'All types', label: 'All types' },
    { value: 'Full Time', label: 'Full Time' },
    { value: 'Permanent', label: 'Permanent' },
    { value: 'Contract', label: 'Contract' },
    { value: 'Remote', label: 'Remote' },
    { value: 'Part Time', label: 'Part Time' },
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  useEffect(() => {
    if (initialKeyword !== undefined) setKeyword(initialKeyword);
    if (initialLocation !== undefined) setLocation(initialLocation);
    if (initialJobType !== undefined) setJobType(initialJobType);
  }, [initialKeyword, initialLocation, initialJobType]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch({
        keyword: keyword.trim(),
        location: location.trim(),
        jobType: jobType === 'All types' ? '' : jobType,
      });
    } else {
      const params = new URLSearchParams();
      if (keyword.trim()) params.set('q', keyword.trim());
      if (location.trim()) params.set('location', location.trim());
      if (jobType && jobType !== 'All types') params.set('type', jobType);

      const queryStr = params.toString();
      router.push(`/vacancies${queryStr ? `?${queryStr}` : ''}`);
    }
  };

  const handleClear = () => {
    setKeyword('');
    setLocation('');
    setJobType('All types');
    if (onSearch) {
      onSearch({ keyword: '', location: '', jobType: '' });
    } else {
      router.push(targetPath);
    }
  };

  const hasActiveFilters = Boolean(
    keyword.trim() || location.trim() || (jobType && jobType !== 'All types')
  );

  return (
    <div className={styles.searchWrapper}>
      <Container>
        <form className={styles.searchCard} onSubmit={handleSubmit} role="search" aria-label="Job Search">
          {/* Field 1: Keywords */}
          <div
            className={styles.field}
            onClick={() => document.getElementById('job-search-keyword')?.focus()}
          >
            <span className={styles.icon} aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </span>
            <div className={styles.inputGroup}>

              <input
                id="job-search-keyword"
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="e.g. Software Developer, HR, Finance"
                className={styles.input}
              />
            </div>
            {keyword && (
              <button
                type="button"
                className={styles.clearFieldBtn}
                onClick={(e) => {
                  e.stopPropagation();
                  setKeyword('');
                  document.getElementById('job-search-keyword')?.focus();
                }}
                title="Clear keyword"
                aria-label="Clear keyword"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            )}
          </div>

          <div className={styles.divider} aria-hidden="true" />

          {/* Field 2: Location */}
          <div
            className={styles.fieldLocation}
            onClick={() => document.getElementById('job-search-location')?.focus()}
          >
            <span className={styles.icon} aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </span>
            <div className={styles.inputGroup}>

              <input
                id="job-search-location"
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g. Netherlands, India, Remote"
                className={styles.input}
              />
            </div>
            {location && (
              <button
                type="button"
                className={styles.clearFieldBtn}
                onClick={(e) => {
                  e.stopPropagation();
                  setLocation('');
                  document.getElementById('job-search-location')?.focus();
                }}
                title="Clear location"
                aria-label="Clear location"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            )}

          </div>

          <div className={styles.divider} aria-hidden="true" />

          {/* Field 3: Custom Job Type Dropdown */}
          <div
            className={styles.fieldType}
            ref={dropdownRef}
            onClick={() => setIsDropdownOpen((prev) => !prev)}
            role="combobox"
            aria-expanded={isDropdownOpen}
            aria-haspopup="listbox"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setIsDropdownOpen((prev) => !prev);
              } else if (e.key === 'Escape') {
                setIsDropdownOpen(false);
              }
            }}
          >
            <span className={styles.icon} aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
            </span>
            <div className={styles.inputGroup}>
              <div className={styles.dropdownTrigger}>
                <span className={styles.dropdownValue}>
                  {jobTypeOptions.find((o) => o.value === jobType)?.label || jobType}
                </span>
                <svg
                  className={`${styles.chevron} ${isDropdownOpen ? styles.chevronOpen : ''}`}
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </div>

            {/* Floating Custom Menu */}
            {isDropdownOpen && (
              <ul className={styles.dropdownMenu} role="listbox" aria-label="Job type options">
                {jobTypeOptions.map((option) => {
                  const isSelected = jobType === option.value;
                  return (
                    <li
                      key={option.value}
                      role="option"
                      aria-selected={isSelected}
                      className={`${styles.dropdownOption} ${isSelected ? styles.dropdownOptionSelected : ''}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setJobType(option.value);
                        setIsDropdownOpen(false);
                      }}
                    >
                      <span>{option.label}</span>
                      {isSelected && (
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      )}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          {/* Search & Clear Action Buttons */}
          <div className={styles.actionGroup}>
            <button type="submit" className={styles.searchBtn}>
              <span>Search Jobs</span>
            </button>

            <button
              type="button"
              className={styles.clearAllBtn}
              onClick={handleClear}
              title="Clear all search inputs"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
              <span>Clear</span>
            </button>
          </div>
        </form>
      </Container>
    </div>
  );
}

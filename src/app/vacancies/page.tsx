'use client';

import React, { useState, useMemo, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Container } from '@/components/common/Container';
import { JobSearch } from '@/components/home/JobSearch';
import { PopularFilters } from '@/components/home/PopularFilters';
import { JobGrid } from '@/components/jobs/JobGrid';
import { JobFilters } from '@/components/jobs/JobFilters';
import { featuredJobs } from '@/data/jobs';
import styles from './vacancies.module.css';

function VacanciesContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const queryQ = searchParams.get('q') || '';
  const queryLoc = searchParams.get('location') || '';
  const queryType = searchParams.get('type') || '';
  const queryFilter = searchParams.get('filter') || '';

  const [searchTerm, setSearchTerm] = useState(queryQ);
  const [selectedLocation, setSelectedLocation] = useState(queryLoc);
  const [selectedType, setSelectedType] = useState(queryType);
  const [activeChip, setActiveChip] = useState(queryFilter);

  useEffect(() => {
    if (queryQ) setSearchTerm(queryQ);
    if (queryLoc) setSelectedLocation(queryLoc);
    if (queryType) setSelectedType(queryType);
    if (queryFilter) setActiveChip(queryFilter);
  }, [queryQ, queryLoc, queryType, queryFilter]);

  const handleSearch = ({ keyword, location, jobType }: { keyword: string; location: string; jobType: string }) => {
    const formattedType = jobType === 'All types' ? '' : jobType;
    setSearchTerm(keyword);
    setSelectedLocation(location);
    setSelectedType(formattedType);

    const params = new URLSearchParams();
    if (keyword) params.set('q', keyword);
    if (location) params.set('location', location);
    if (formattedType) params.set('type', formattedType);
    if (activeChip) params.set('filter', activeChip);
    router.replace(`/vacancies${params.toString() ? `?${params.toString()}` : ''}`, { scroll: false });
  };

  const handleChipSelect = (chipId: string) => {
    setActiveChip(chipId);
    const params = new URLSearchParams();
    if (searchTerm) params.set('q', searchTerm);
    if (selectedLocation) params.set('location', selectedLocation);
    if (selectedType) params.set('type', selectedType);
    if (chipId) params.set('filter', chipId);
    router.replace(`/vacancies${params.toString() ? `?${params.toString()}` : ''}`, { scroll: false });
  };

  const filteredJobs = useMemo(() => {
    return featuredJobs.filter((job) => {
      const matchLoc =
        !selectedLocation ||
        job.country.toLowerCase().includes(selectedLocation.toLowerCase()) ||
        job.city.toLowerCase().includes(selectedLocation.toLowerCase()) ||
        job.location.toLowerCase().includes(selectedLocation.toLowerCase());

      const matchType = !selectedType || job.type.toLowerCase() === selectedType.toLowerCase();

      const matchSearch =
        !searchTerm ||
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.skills.some((s) => s.toLowerCase().includes(searchTerm.toLowerCase()));

      let matchChip = true;
      if (activeChip) {
        const c = activeChip.toLowerCase();
        if (c === 'remote') {
          matchChip = job.type.toLowerCase() === 'remote' || job.location.toLowerCase().includes('remote');
        } else if (c === 'contract' || c === 'permanent') {
          matchChip = job.type.toLowerCase() === c;
        } else if (['netherlands', 'india', 'poland', 'germany'].includes(c)) {
          matchChip = job.country.toLowerCase() === c;
        } else if (c === 'it-software') {
          matchChip = (job.industry?.toLowerCase().includes('software') || job.industry?.toLowerCase().includes('it')) ?? false;
        } else if (c === 'finance') {
          matchChip = (job.industry?.toLowerCase().includes('finance') || job.industry?.toLowerCase().includes('banking')) ?? false;
        } else if (c === 'hr') {
          matchChip = (job.industry?.toLowerCase().includes('hr') || job.industry?.toLowerCase().includes('recruitment')) ?? false;
        } else if (c === 'marketing') {
          matchChip = job.industry?.toLowerCase().includes('marketing') ?? false;
        }
      }

      return matchLoc && matchType && matchSearch && matchChip;
    });
  }, [selectedLocation, selectedType, searchTerm, activeChip]);

  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.mapBackground} aria-hidden="true" />
        <Container>
          <div className={styles.heroInner}>
            <span className={styles.badge}>Global Opportunities</span>
            <h1 className={styles.title}>Explore International Vacancies</h1>
            <p className={styles.subtitle}>
              Browse verified job opportunities with premier technology and corporate leaders across Europe, Asia, and the Americas.
            </p>
          </div>
        </Container>
      </div>

      {/* Top Search Bar & Popular Filter Chips */}
      <JobSearch
        initialKeyword={searchTerm}
        initialLocation={selectedLocation}
        initialJobType={selectedType || 'All types'}
        onSearch={handleSearch}
        targetPath="/vacancies"
      />

      <PopularFilters
        activeFilter={activeChip}
        onSelectFilter={handleChipSelect}
        targetPath="/vacancies"
      />

      <section className={styles.contentSection}>
        <Container>
          <div className={styles.layout}>
            {/* Sidebar Filters */}
            <aside>
              <JobFilters
                selectedLocation={selectedLocation}
                onLocationChange={(loc) => {
                  setSelectedLocation(loc);
                  handleSearch({ keyword: searchTerm, location: loc, jobType: selectedType });
                }}
                selectedType={selectedType}
                onTypeChange={(t) => {
                  setSelectedType(t);
                  handleSearch({ keyword: searchTerm, location: selectedLocation, jobType: t });
                }}
                onClear={() => {
                  setSelectedLocation('');
                  setSelectedType('');
                  setSearchTerm('');
                  setActiveChip('');
                  router.replace('/vacancies', { scroll: false });
                }}
              />
            </aside>

            {/* Main Job Listing */}
            <main className={styles.mainContent}>
              <div className={styles.topBar}>
                <span className={styles.resultsCount}>
                  Showing active vacancies: {filteredJobs.length}
                </span>
                {(searchTerm || selectedLocation || selectedType || activeChip) && (
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedLocation('');
                      setSelectedType('');
                      setSearchTerm('');
                      setActiveChip('');
                      router.replace('/vacancies', { scroll: false });
                    }}
                    className={styles.clearBtn}
                  >
                    Clear all filters
                  </button>
                )}
              </div>

              <JobGrid jobs={filteredJobs} />
            </main>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default function VacanciesPage() {
  return (
    <Suspense fallback={<div style={{ padding: '60px', textAlign: 'center' }}>Loading vacancies...</div>}>
      <VacanciesContent />
    </Suspense>
  );
}

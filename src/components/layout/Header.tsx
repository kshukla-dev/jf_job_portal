'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { mainNavigation } from '@/data/navigation';
import { useJobAlertModal } from '@/context/JobAlertModalContext';
import { Container } from '@/components/common/Container';
import { MobileMenu } from './MobileMenu';
import styles from './Header.module.css';

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openJobAlertModal } = useJobAlertModal();

  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        {/* Left: Jackson & Frank Logo */}
        <div className={styles.left}>
          <Link href="/" className={styles.logoLink} aria-label="Jackson & Frank Home">
            <Image
              src="/images/logos/logo-dark.svg"
              alt="Jackson & Frank - Your Global Talent Solutions"
              width={220}
              height={35}
              priority
              className={styles.logoImage}
            />
          </Link>
        </div>

        {/* Center/Right: Clean Navigation Links */}
        <nav className={styles.nav} aria-label="Main Navigation">
          {mainNavigation.map((item) => {
            const isJobAlert = item.href === '/job-alert';
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`${styles.navLink} ${isActive ? styles.activeNavLink : ''}`}
                onClick={(e) => {
                  if (isJobAlert) {
                    e.preventDefault();
                    openJobAlertModal();
                  }
                }}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Hamburger Toggle */}
        <div className={styles.right}>
          <button
            className={styles.mobileToggle}
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open Navigation Menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </Container>

      {/* Mobile Menu Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
}

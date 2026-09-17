'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { mainNavigation, languages } from '@/data/navigation';
import { Container } from '@/components/common/Container';
import { useLanguage, LanguageCode } from '@/context/LanguageContext';
import { MobileMenu } from './MobileMenu';
import styles from './Header.module.css';

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { currentLang, currentLangItem, setLanguage, t } = useLanguage();
  const langMenuRef = useRef<HTMLDivElement>(null);

  // Close language dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getNavLabel = (href: string, originalName: string) => {
    switch (href) {
      case '/jobs':
        return t('nav_jobs', originalName);
      case '/career-advice':
        return t('nav_career_advice', originalName);
      case '/blog':
        return t('nav_blogs', originalName);
      case '/news':
        return t('nav_news', originalName);
      case '/vacancies':
        return t('nav_vacancies', originalName);
      case '/job-alert':
        return t('nav_job_alert', originalName);
      case '/about':
        return t('nav_about_us', originalName);
      default:
        return originalName;
    }
  };

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

        {/* Center: Clean Horizontal Navigation */}
        <nav className={styles.nav} aria-label="Main Navigation">
          {mainNavigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`${styles.navLink} ${isActive ? styles.activeNavLink : ''}`}
              >
                {getNavLabel(item.href, item.name)}
              </Link>
            );
          })}
        </nav>

        {/* Right: Language / Login / Register */}
        <div className={styles.right}>
          <div className={styles.langWrapper} ref={langMenuRef}>
            <button
              className={styles.langSelector}
              onClick={() => setIsLangOpen(!isLangOpen)}
              aria-expanded={isLangOpen}
              aria-label="Select Language"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              <span>{currentLangItem.name}</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: isLangOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>

            {isLangOpen && (
              <div className={styles.langDropdown}>
                {languages.map((lang) => {
                  const isSelected = currentLang === lang.code;
                  return (
                    <button
                      key={lang.code}
                      className={`${styles.langOption} ${isSelected ? styles.langOptionActive : ''}`}
                      onClick={() => {
                        setLanguage(lang.code as LanguageCode);
                        setIsLangOpen(false);
                      }}
                    >
                      <span className={styles.langItemLeft}>
                        <span>{lang.flag}</span>
                        <span>{lang.label}</span>
                      </span>
                      {isSelected && (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      )}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          <Link href="/login" className={styles.loginBtn}>
            {t('btn_login', 'Login')}
          </Link>

          <Link href="/register" className={styles.registerBtn}>
            {t('btn_register', 'Register')}
          </Link>

          {/* Mobile Hamburger Toggle */}
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

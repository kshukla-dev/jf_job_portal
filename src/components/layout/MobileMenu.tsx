'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { mainNavigation, languages } from '@/data/navigation';
import { Button } from '@/components/common/Button';
import { useLanguage, LanguageCode } from '@/context/LanguageContext';
import styles from './MobileMenu.module.css';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const { currentLang, setLanguage, t } = useLanguage();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

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

  if (!isOpen) return null;

  return (
    <>
      <div className={styles.overlay} onClick={onClose} aria-hidden="true" />
      <div className={styles.drawer} role="dialog" aria-modal="true" aria-label="Mobile Navigation Menu">
        <div className={styles.drawerHeader}>
          <Image
            src="/images/logos/logo-dark.svg"
            alt="Jackson & Frank"
            width={190}
            height={30}
            priority
          />
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close menu">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <nav>
          <ul className={styles.navList}>
            {mainNavigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
                    onClick={onClose}
                  >
                    {getNavLabel(item.href, item.name)}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className={styles.actions}>
          <div className={styles.mobileLangRow}>
            <span className={styles.mobileLangLabel}>Select Language</span>
            <div className={styles.mobileLangGrid}>
              {languages.map((lang) => {
                const isSelected = currentLang === lang.code;
                return (
                  <button
                    key={lang.code}
                    className={`${styles.mobileLangBtn} ${isSelected ? styles.mobileLangBtnActive : ''}`}
                    onClick={() => {
                      setLanguage(lang.code as LanguageCode);
                    }}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
          <Button href="/login" variant="outline" fullWidth onClick={onClose}>
            {t('btn_login', 'Login')}
          </Button>
          <Button href="/register" variant="primary" fullWidth onClick={onClose}>
            {t('btn_register', 'Register')}
          </Button>
        </div>
      </div>
    </>
  );
}

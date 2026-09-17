import React from 'react';
import { Container } from '@/components/common/Container';
import styles from './career-advice.module.css';

export default function CareerAdvicePage() {
  const guides = [
    {
      title: 'International CV & Portfolio Standards',
      desc: 'How to structure your technical resume and portfolio for Dutch, German, and UK hiring managers.',
      icon: 'document'
    },
    {
      title: 'European Visa & Tax Equalization (30% Ruling)',
      desc: 'Understanding net disposable income, tax facilities, and expat incentives across Western Europe.',
      icon: 'calculator'
    },
    {
      title: 'Cross-Border Behavioral Interviews',
      desc: 'Frameworks to communicate cross-cultural collaboration and complex stakeholder management effectively.',
      icon: 'chat'
    },
    {
      title: 'Relocating with Family & Housing Navigation',
      desc: 'Essential tips for finding rental housing, international schooling, and registering with municipal councils.',
      icon: 'home'
    },
    {
      title: 'Salary Negotiation Across Currencies',
      desc: 'Benchmark your worth against European and Asian median market rates and total compensation models.',
      icon: 'trending'
    },
    {
      title: 'Remote vs. Hybrid Contract Formats',
      desc: 'Navigating employer of record (EOR), freelance ZZP contracts, and permanent employment options.',
      icon: 'globe'
    }
  ];

  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <Container>
          <h1 className={styles.title}>Candidate Career Advice</h1>
          <p className={styles.subtitle}>
            Empowering professionals with proven insights, relocation guides, and interview strategies for international careers.
          </p>
        </Container>
      </div>

      <Container>
        <div className={styles.grid}>
          {guides.map((guide) => (
            <div key={guide.title} className={styles.card}>
              <div className={styles.icon}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <h2 className={styles.cardTitle}>{guide.title}</h2>
              <p className={styles.cardText}>{guide.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

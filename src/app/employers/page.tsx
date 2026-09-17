import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import styles from './employers.module.css';

export default function EmployersPage() {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <Container>
          <h1 className={styles.title}>
            Partner with Jackson & Frank<br />
            to Scale Your Global Workforce
          </h1>
          <p className={styles.subtitle}>
            We connect industry leaders with top-tier international talent across 50+ countries. Streamline cross-border hiring, legal compliance, and international relocation.
          </p>
        </Container>
      </div>

      <Container>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Executive Search</h2>
            <p className={styles.cardText}>
              Confidential, precision headhunting for senior leadership, board members, and executive officers in engineering, banking, and clinical sectors.
            </p>
          </div>

          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Contingent & Technical Teams</h2>
            <p className={styles.cardText}>
              Scale specialized technical squads rapidly. Access vetted software engineers, cloud architects, and data scientists ready for international relocation.
            </p>
          </div>

          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Global Mobility & Compliance</h2>
            <p className={styles.cardText}>
              Turnkey immigration, visa sponsorship assistance, and cross-border payroll advisory to ensure complete statutory compliance in every destination.
            </p>
          </div>
        </div>

        <div className={styles.ctaCard}>
          <h2 className={styles.ctaTitle}>Ready to Hire World-Class Talent?</h2>
          <p className={styles.ctaText}>
            Speak with an international recruitment director to discuss your staffing mandates and hiring requirements.
          </p>
          <Button href="/contact" size="lg" variant="primary">
            Schedule a Consultation →
          </Button>
        </div>
      </Container>
    </div>
  );
}

'use client';

import React from 'react';
import { Container } from '@/components/common/Container';
import { DynamicJobAlertForm } from '@/components/forms/DynamicJobAlertForm';
import styles from './job-alert.module.css';

export default function JobAlertPage() {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <Container>
          <h1 className={styles.title}>Create Custom Job Alert</h1>
          <p className={styles.subtitle}>
            Never miss an international opening. Receive personalized notifications when roles matching your technical specialization are posted.
          </p>
        </Container>
      </div>

      <Container>
        <div className={styles.cardWrapper}>
          <DynamicJobAlertForm />
        </div>
      </Container>
    </div>
  );
}


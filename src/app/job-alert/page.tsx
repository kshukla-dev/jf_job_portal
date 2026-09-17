'use client';

import React, { useState } from 'react';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import styles from './job-alert.module.css';

export default function JobAlertPage() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [keyword, setKeyword] = useState('');
  const [destination, setDestination] = useState('Netherlands');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
        <div className={styles.card}>
          {submitted ? (
            <div className={styles.successMsg}>
              ✓ Your job alert has been successfully activated for {email}. You will receive weekly updates for roles matching "{keyword || 'All roles'}" in {destination}.
            </div>
          ) : null}

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="alert-email" className={styles.label}>Email Address *</label>
              <input
                id="alert-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@company.com"
                className={styles.input}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="alert-keyword" className={styles.label}>Role / Skills / Keywords</label>
              <input
                id="alert-keyword"
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="e.g. Software Engineer, Angular, .NET"
                className={styles.input}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="alert-dest" className={styles.label}>Preferred Destination</label>
              <select
                id="alert-dest"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className={styles.select}
              >
                <option value="Netherlands">Netherlands</option>
                <option value="Germany">Germany</option>
                <option value="India">India</option>
                <option value="Poland">Poland</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="United States">United States</option>
                <option value="Remote">Remote Global</option>
              </select>
            </div>

            <Button type="submit" size="lg" variant="primary">
              Subscribe to Job Alerts →
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
}

import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/common/Container';
import heroWomanImg from '../../../public/images/hero/hero-woman.png';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section className={styles.heroSection}>
      {/* Background world dots map */}
      <div className={styles.mapBackground} aria-hidden="true" />

      <Container>
        <div className={styles.heroGrid}>
          {/* Left: Text & Headings */}
          <div className={styles.leftCol}>
            <span className={styles.eyebrow}>
              GLOBAL OPPORTUNITIES. REAL IMPACT.
            </span>
            <h1 className={styles.title}>
              Find your next<br />
              opportunity, <span className={styles.highlight}>anywhere.</span>
            </h1>
            <p className={styles.description}>
              Explore thousands of jobs with leading companies around the world.<br />
              Build a career without borders.
            </p>
          </div>

          {/* Right: Working professional woman visual with laptop & script text */}
          <div className={styles.rightCol}>
            <div className={styles.imageWrapper}>
              <Image
                src={heroWomanImg}
                alt="Professional candidate working on laptop with Jackson & Frank"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className={styles.heroImage}
              />
              <div className={styles.scriptQuote} aria-hidden="true">
                <span>Global</span>
                <span>People</span>
                <span>Brighter</span>
                <span>Futures</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

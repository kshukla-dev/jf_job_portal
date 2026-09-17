import React from 'react';
import { Container } from '@/components/common/Container';
import styles from './about.module.css';

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <Container>
          <h1 className={styles.title}>About Jackson & Frank</h1>
          <p className={styles.subtitle}>
            Your Global Talent Solutions partner. Connecting forward-thinking enterprises with extraordinary professionals worldwide.
          </p>
        </Container>
      </div>

      <Container>
        <div className={styles.contentGrid}>
          <div>
            <h2 className={styles.sectionTitle}>Our Global Mission</h2>
            <p className={styles.text}>
              At Jackson & Frank, we believe talent knows no borders. Founded with the conviction that international recruitment should be transparent, human-centric, and compliant, we have grown into a trusted partner for Fortune 500 enterprises and hyper-growth scaleups across Europe, North America, and the Asia-Pacific region.
            </p>
            <p className={styles.text}>
              From specialized semiconductor engineers in Eindhoven to quantitative analysts in Amsterdam and enterprise cloud architects in Bangalore, our cross-border search teams ensure smooth placements that foster long-term career growth.
            </p>
          </div>

          <div>
            <h2 className={styles.sectionTitle}>Integrity & International Reach</h2>
            <p className={styles.text}>
              Our multilingual teams operate out of European and international hubs including Amsterdam, London, Frankfurt, Bangalore, and Singapore. We handle not merely candidate identification, but comprehensive immigration advisory, cultural integration support, and statutory tax compliance.
            </p>
            <p className={styles.text}>
              Whether you are an ambitious engineer seeking your next career leap or an enterprise expanding global capability centers, Jackson & Frank delivers results with precision and care.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

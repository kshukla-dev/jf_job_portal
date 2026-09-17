import React from 'react';
import { Container } from '@/components/common/Container';
import { NewsGrid } from '@/components/news/NewsGrid';
import { newsArticles } from '@/data/news';
import styles from './news.module.css';

export default function NewsPage() {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <Container>
          <h1 className={styles.title}>Company News & Press Releases</h1>
          <p className={styles.subtitle}>
            Stay updated with corporate milestones, new office expansions, and global employment market studies from Jackson & Frank.
          </p>
        </Container>
      </div>

      <Container>
        <NewsGrid articles={newsArticles} />
      </Container>
    </div>
  );
}

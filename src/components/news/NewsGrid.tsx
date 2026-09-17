import React from 'react';
import { NewsArticle } from '@/types/news';
import { NewsCard } from './NewsCard';
import styles from './NewsGrid.module.css';

interface NewsGridProps {
  articles: NewsArticle[];
}

export function NewsGrid({ articles }: NewsGridProps) {
  return (
    <div className={styles.grid}>
      {articles.map((article) => (
        <NewsCard key={article.id} article={article} />
      ))}
    </div>
  );
}

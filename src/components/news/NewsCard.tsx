import React from 'react';
import Link from 'next/link';
import { NewsArticle } from '@/types/news';
import styles from './NewsCard.module.css';

interface NewsCardProps {
  article: NewsArticle;
}

export function NewsCard({ article }: NewsCardProps) {
  return (
    <Link href={`/news/${article.slug}`} className={styles.card}>
      <span className={styles.category}>{article.category}</span>
      <h3 className={styles.title}>{article.title}</h3>
      <p className={styles.summary}>{article.summary}</p>
      
      <div className={styles.footer}>
        <span>{article.publishedAt}</span>
        <span>{article.source}</span>
      </div>
    </Link>
  );
}

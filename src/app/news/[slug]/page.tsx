import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Container } from '@/components/common/Container';
import { getNewsArticleBySlug } from '@/lib/api';
import styles from './news-details.module.css';

export default async function NewsDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getNewsArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <div className={styles.page}>
      <Container>
        <Link href="/news" className={styles.backLink}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          <span>Back to all news</span>
        </Link>

        <article className={styles.article}>
          <span className={styles.category}>{article.category}</span>
          <h1 className={styles.title}>{article.title}</h1>
          
          <div className={styles.metaRow}>
            <span>{article.publishedAt}</span>
            <span>•</span>
            <span>Source: {article.source}</span>
          </div>

          <div className={styles.content}>
            {article.content}
          </div>
        </article>
      </Container>
    </div>
  );
}

import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Container } from '@/components/common/Container';
import { getBlogPostBySlug } from '@/lib/api';
import styles from './blog-details.module.css';

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className={styles.page}>
      <Container>
        <Link href="/blog" className={styles.backLink}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          <span>Back to all blogs</span>
        </Link>

        <article className={styles.article}>
          <span className={styles.category}>{post.category}</span>
          <h1 className={styles.title}>{post.title}</h1>
          
          <div className={styles.metaRow}>
            <span className={styles.authorName}>By {post.author.name} ({post.author.role})</span>
            <span>•</span>
            <span>{post.publishedAt}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>

          <div className={styles.content}>
            {post.content}
          </div>
        </article>
      </Container>
    </div>
  );
}

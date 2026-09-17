import React from 'react';
import { Container } from '@/components/common/Container';
import { BlogGrid } from '@/components/blog/BlogGrid';
import { blogPosts } from '@/data/blogs';
import styles from './blog.module.css';

export default function BlogPage() {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <Container>
          <h1 className={styles.title}>Jackson & Frank Blogs & Articles</h1>
          <p className={styles.subtitle}>
            Thought leadership, international relocation analysis, and global hiring trends written by our worldwide recruitment partners.
          </p>
        </Container>
      </div>

      <Container>
        <BlogGrid posts={blogPosts} />
      </Container>
    </div>
  );
}

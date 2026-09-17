import React from 'react';
import Link from 'next/link';
import { BlogPost } from '@/types/blog';
import styles from './BlogCard.module.css';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className={styles.card}>
      <span className={styles.category}>{post.category}</span>
      <h3 className={styles.title}>{post.title}</h3>
      <p className={styles.excerpt}>{post.excerpt}</p>
      
      <div className={styles.footer}>
        <span>{post.publishedAt}</span>
        <span>{post.readTime}</span>
      </div>
    </Link>
  );
}

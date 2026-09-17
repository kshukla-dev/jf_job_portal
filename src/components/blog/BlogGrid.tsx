import React from 'react';
import { BlogPost } from '@/types/blog';
import { BlogCard } from './BlogCard';
import styles from './BlogGrid.module.css';

interface BlogGridProps {
  posts: BlogPost[];
}

export function BlogGrid({ posts }: BlogGridProps) {
  return (
    <div className={styles.grid}>
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}

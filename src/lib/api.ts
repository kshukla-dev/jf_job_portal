import { featuredJobs } from '@/data/jobs';
import { countriesData } from '@/data/countries';
import { blogPosts } from '@/data/blogs';
import { newsArticles } from '@/data/news';
import { Job } from '@/types/job';

export async function getFeaturedJobs(): Promise<Job[]> {
  return featuredJobs.filter((job) => job.isFeatured);
}

export async function getAllJobs(): Promise<Job[]> {
  return featuredJobs;
}

export async function getJobBySlug(slug: string): Promise<Job | undefined> {
  return featuredJobs.find((job) => job.slug === slug);
}

export async function getCountryBySlug(slug: string) {
  return countriesData.find((country) => country.slug === slug);
}

export async function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export async function getNewsArticleBySlug(slug: string) {
  return newsArticles.find((item) => item.slug === slug);
}

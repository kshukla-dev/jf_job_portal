import { NewsArticle } from '@/types/news';

export const newsArticles: NewsArticle[] = [
  {
    id: 'news-1',
    slug: 'jackson-frank-expands-munich-office',
    title: 'Jackson & Frank Expands DACH Operations with New Munich Office',
    summary: 'Strategic expansion strengthens specialized automotive, aerospace, and semiconductor recruitment across Germany, Austria, and Switzerland.',
    content: 'Jackson & Frank today announced the opening of its latest continental European office in Munich, Germany. The hub will serve enterprise clients in robotics, automotive software, and advanced manufacturing.',
    category: 'Corporate News',
    publishedAt: 'March 12, 2026',
    source: 'Jackson & Frank Press Bureau'
  },
  {
    id: 'news-2',
    slug: '2026-global-mobility-report-released',
    title: 'Jackson & Frank Publishes 2026 Global Mobility & Tech Salary Benchmark',
    summary: 'Comprehensive analysis covering 150,000+ cross-border engineering and finance placements across 50 countries.',
    content: 'Our flagship 2026 compensation study reveals rising demand for cross-border talent in semiconductor photolithography, cloud distributed systems, and quantitative risk management.',
    category: 'Research & Reports',
    publishedAt: 'February 18, 2026',
    source: 'Market Intelligence Unit'
  }
];

export interface NavigationItem {
  name: string;
  href: string;
  current?: boolean;
}

export interface StatisticItem {
  id: string;
  value: string;
  label: string;
  icon: string;
}

export interface FilterChip {
  id: string;
  label: string;
  type?: 'location' | 'type' | 'industry' | 'workstyle';
}

export type CategoryTab = 'By Industry' | 'By Function' | 'By Location' | 'By Job Type';

export interface CategoryItem {
  id: string;
  title: string;
  jobCount: string;
  icon: string;
}

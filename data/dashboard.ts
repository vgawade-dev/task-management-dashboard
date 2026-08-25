import type { Task, Statistic } from '@/types/dashboard';

export interface QuickAction {
  label: string;
  href: string;
}

export const sampleTasks: Task[] = [
  { id: 1, title: 'Build Dashboard', status: 'completed' },
  { id: 2, title: 'Create Task API', status: 'in-progress' },
  { id: 3, title: 'Update Sidebar', status: 'pending' },
  { id: 4, title: 'Fix Login UI', status: 'completed' },
];

export const stats: Statistic[] = [
  { title: 'Total Tasks', value: 24 },
  { title: 'Completed', value: 18 },
  { title: 'Pending', value: 6 },
];

export const quickActions: QuickAction[] = [
  { label: 'Create Task', href: '/tasks' },
  { label: 'View All Tasks', href: '/tasks' },
];

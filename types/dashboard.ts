export type TaskStatus = 'completed' | 'in-progress' | 'pending';

export interface Task {
  id: number;
  title: string;
  status: TaskStatus;
}

export interface Statistic {
  title: string;
  value: number;
}

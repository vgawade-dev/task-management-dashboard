
export type TaskStatus = 'completed' | 'in-progress' | 'pending';

export interface Task {
  id: number;
  title: string;
  status: TaskStatus;
}

interface RecentTasksProps {
  tasks: Task[];
}

const statusClasses: Record<TaskStatus, string> = {
  completed: 'bg-green-100 text-green-800',
  'in-progress': 'bg-yellow-100 text-yellow-800',
  pending: 'bg-slate-100 text-slate-700',
};

export default function RecentTasks({ tasks }: RecentTasksProps) {
  return (
    <div>
      {/* <h2 className="mb-3 text-lg font-semibold text-slate-800">Recent Tasks</h2> */}

      <ul className="space-y-2">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex items-center justify-between rounded-md border border-slate-200 bg-white px-4 py-3"
          >
            <div className="text-sm text-slate-700">{task.title}</div>

            <span
              className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${statusClasses[task.status]}`}
            >
              {task.status === 'in-progress'
                ? 'In Progress'
                : task.status.charAt(0).toUpperCase() + task.status.slice(1)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

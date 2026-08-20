
import type { Task, TaskStatus } from '@/types/dashboard';

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

      {tasks.length === 0 ? (
        <div className="rounded-md border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700">
          No recent tasks found.
        </div>
      ) : (
        <ul className="space-y-2">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between rounded-md border border-slate-200 bg-white px-4 py-3 gap-2"
            >
              <div className="text-sm text-slate-700 min-w-0 truncate">{task.title}</div>

              <span
                className={`inline-flex shrink-0 items-center rounded-full px-3 py-1 text-sm font-medium ${statusClasses[task.status]}`}
              >
                {task.status === 'in-progress'
                  ? 'In Progress'
                  : task.status.charAt(0).toUpperCase() + task.status.slice(1)}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

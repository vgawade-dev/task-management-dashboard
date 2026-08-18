import StatCard from '@/components/dashboard/StatCard';
import RecentTasks, { Task } from '@/components/dashboard/RecentTasks';
import QuickActions from '@/components/dashboard/QuickActions';

export default function DashboardPage() {
  const sampleTasks: Task[] = [
    { id: 1, title: 'Build Dashboard', status: 'completed' },
    { id: 2, title: 'Create Task API', status: 'in-progress' },
    { id: 3, title: 'Update Sidebar', status: 'pending' },
    { id: 4, title: 'Fix Login UI', status: 'completed' },
  ];

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>

        <p className="mt-2 text-slate-600">
          Welcome to your TaskFlow dashboard. Overview of statistics and recent activity.
        </p>
      </div>

      <section aria-label="Statistics" className="mb-8">
        <h2 className="mb-3 text-xl font-semibold text-slate-800">
          Statistics
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <StatCard title="Total Tasks" value={24} />
          <StatCard title="Completed" value={18} />
          <StatCard title="Pending" value={6} />
        </div>
      </section>

      <section aria-label="Recent Tasks">
        <h2 className="mb-3 text-xl font-semibold text-slate-800">Recent Tasks</h2>

        <RecentTasks tasks={sampleTasks} />
      </section>

      <section aria-label="Quick Actions" className="mt-6">
        <h2 className="mb-3 text-xl font-semibold text-slate-800">Quick Actions</h2>

        <QuickActions />
      </section>
    </div>
  );
}
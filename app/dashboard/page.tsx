import StatCard from '@/components/Dashboard/StatCard';
import RecentTasks from '@/components/Dashboard/RecentTasks';
import QuickActions from '@/components/Dashboard/QuickActions';
import { sampleTasks, stats } from '@/data/dashboard';

export default function DashboardPage() {
  // use mock data from data/dashboard.ts

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
          {stats.map(({ title, value }) => (
            <StatCard title={title} value={value} />
            //  key={title}
          ))}
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
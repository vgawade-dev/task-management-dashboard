export default function DashboardPage() {
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

        <div className="h-36 w-full rounded-md border border-slate-200 bg-white" />
      </section>

      <section aria-label="Recent Tasks">
        <h2 className="mb-3 text-xl font-semibold text-slate-800">
          Recent Tasks
        </h2>

        <div className="h-48 w-full rounded-md border border-slate-200 bg-white" />
      </section>
    </div>
  );
}
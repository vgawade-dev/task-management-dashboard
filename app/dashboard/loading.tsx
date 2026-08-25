export default function DashboardLoading() {
  return (
    <main
      role="status"
      aria-live="polite"
      aria-busy="true"
      className="min-h-[200px] flex items-center justify-center px-4"
    >
      <p className="text-sm text-slate-600">Loading dashboard...</p>
    </main>
  );
}

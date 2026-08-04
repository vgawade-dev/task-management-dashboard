export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 p-6 text-white">
      <nav>
        <ul className="space-y-4">
          <li>Dashboard</li>
          <li>Tasks</li>
          <li>Analytics</li>
          <li>Settings</li>
        </ul>
      </nav>
    </aside>
  );
}
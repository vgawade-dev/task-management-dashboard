"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavigationItem {
  name: string;
  href: string;
  icon: string;
}

const navigation: NavigationItem[] = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: "📊",
  },
  {
    name: "Tasks",
    href: "/tasks",
    icon: "📋",
  },
  {
    name: "Calendar",
    href: "/calendar",
    icon: "📅",
  },
  {
    name: "Analytics",
    href: "/analytics",
    icon: "📈",
  },
  {
    name: "Team",
    href: "/team",
    icon: "👥",
  },
  {
    name: "Settings",
    href: "/settings",
    icon: "⚙️",
  },
];

export default function Sidebar() {

  const pathname = usePathname();
  console.log(pathname);

  return (
    <aside className="flex min-h-screen w-64 flex-col border-r border-slate-200 bg-slate-900 text-white">
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navigation.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`flex items-center gap-3 rounded-lg px-4 py-3 transition-colors ${pathname === item.href
                    ? "bg-blue-600 text-white"
                    : "hover:bg-slate-800"
                  }`}
              >
                <span>{item.icon}</span>

                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="border-t border-slate-700 p-4">
        <p className="text-sm text-slate-300">Signed in as</p>

        <p className="font-semibold">Vedanti</p>
      </div>
    </aside>
  );
}
'use client';

import Link from 'next/link';
import { useState } from 'react';
import CreateTaskModal from '@/components/Tasks/CreateTaskModal';
import { quickActions } from '@/data/dashboard';

export default function QuickActions() {
  const [isCreateTaskModalOpen, setIsCreateTaskModalOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        {quickActions.map((action) => {
          const isPrimary = action.label === 'Create Task';
          const className = isPrimary
            ? 'inline-flex w-full items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:w-auto'
            : 'inline-flex w-full items-center justify-center rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-300 sm:w-auto';

          if (action.label === 'Create Task') {
            return (
              <button
                key={action.label}
                type="button"
                onClick={() => setIsCreateTaskModalOpen(true)}
                className={className}
              >
                {action.label}
              </button>
            );
          }

          return (
            <Link key={`${action.label}-${action.href}`} href={action.href} className={className}>
              {action.label}
            </Link>
          );
        })}
      </div>

      <CreateTaskModal
        isOpen={isCreateTaskModalOpen}
        onClose={() => setIsCreateTaskModalOpen(false)}
      />
    </>
  );
}
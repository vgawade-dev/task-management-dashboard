"use client"

import React from 'react'

type DashboardErrorProps = {
  error: Error
  reset: () => void
}

export default function DashboardError({ error, reset }: DashboardErrorProps) {
  return (
    <main role="alert" className="min-h-[200px] flex flex-col items-center justify-center px-4">
      <div className="rounded-md border border-red-200 bg-red-50 px-6 py-5 text-center">
        <p className="text-sm font-medium text-red-800">Something went wrong while loading the dashboard.</p>
        <p className="mt-2 text-xs text-red-700">{error?.message}</p>
        <div className="mt-4">
          <button
            type="button"
            onClick={() => reset()}
            className="inline-flex items-center rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Try again
          </button>
        </div>
      </div>
    </main>
  )
}

# TaskFlow - Folder Structure

## Version

**Version:** 1.0

---

# Purpose

This document defines the folder structure for the TaskFlow application.

The objective is to create a clean, scalable, and maintainable project that follows professional React and Next.js practices.

Every file should have a clear purpose and belong to the correct folder.

---

# Project Structure

```text
taskflow/
│
├── app/
│   ├── (dashboard)/
│   │   ├── dashboard/
│   │   │   └── page.tsx
│   │   ├── tasks/
│   │   │   └── page.tsx
│   │   ├── calendar/
│   │   │   └── page.tsx
│   │   ├── analytics/
│   │   │   └── page.tsx
│   │   ├── team/
│   │   │   ├── page.tsx
│   │   │   └── [id]/
│   │   │       └── page.tsx
│   │   ├── profile/
│   │   │   └── page.tsx
│   │   ├── settings/
│   │   │   └── page.tsx
│   │   └── layout.tsx
│   │
│   ├── globals.css
│   ├── favicon.ico
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── layout/
│   ├── ui/
│   ├── dashboard/
│   ├── task/
│   ├── profile/
│   └── shared/
│
├── hooks/
│
├── lib/
│
├── services/
│
├── types/
│
├── utils/
│
├── constants/
│
├── public/
│
├── docs/
│
├── package.json
├── tsconfig.json
└── README.md
```

---

# Folder Explanation

## app/

Contains all application routes using the Next.js App Router.

Responsibilities:

* Routing
* Page layouts
* Route groups
* Nested layouts

Do not place reusable UI components here.

---

## components/

Contains reusable React components.

Structure:

```text
components/
│
├── layout/
├── ui/
├── dashboard/
├── task/
├── profile/
└── shared/
```

---

## components/layout/

Contains components responsible for page layout.

Examples

* Header
* Sidebar
* Footer
* PageContainer

---

## components/ui/

Contains generic reusable UI components.

Examples

* Button
* Card
* Input
* Badge
* Modal
* Spinner
* Avatar
* Dropdown
* Toast

These components should not know anything about tasks or dashboards.

---

## components/dashboard/

Contains dashboard-specific components.

Examples

* WelcomeBanner
* StatisticsCard
* ActivityFeed
* RecentTasks

---

## components/task/

Contains task management components.

Examples

* TaskCard
* TaskTable
* TaskRow
* TaskForm
* TaskFilter
* TaskDetails

---

## components/profile/

Contains user-related components.

Examples

* ProfileCard
* UserMenu
* NotificationPanel

---

## components/shared/

Contains components used across multiple features.

Examples

* EmptyState
* LoadingScreen
* ErrorMessage
* ConfirmDialog

---

# hooks/

Contains reusable custom React hooks.

Examples

* useTasks()
* useSearch()
* usePagination()
* useTheme()

Hooks should contain reusable logic, not UI.

---

# lib/

Contains application configuration and third-party setup.

Examples

* Apollo Client
* GraphQL Client
* API Configuration
* Authentication Helpers

---

# services/

Responsible for communicating with APIs.

Examples

```text
services/
│
├── task.service.ts
├── dashboard.service.ts
└── user.service.ts
```

Services should not contain UI code.

---

# types/

Contains shared TypeScript types and interfaces.

Examples

```text
types/
│
├── task.ts
├── user.ts
└── dashboard.ts
```

Avoid redefining the same interface in multiple files.

---

# utils/

Contains reusable helper functions.

Examples

* Format dates
* Capitalize text
* Format currency
* Generate initials

Utility functions should be pure and reusable.

---

# constants/

Stores application-wide constants.

Examples

* Route names
* Sidebar menu items
* Status values
* Priority values
* Theme constants

---

# public/

Contains static assets.

Examples

* Images
* Icons
* Logos
* Fonts (if self-hosted)

---

# docs/

Contains project documentation.

Examples

* Project Plan
* Design System
* UI Specification
* API Plan
* Sprint Notes

---

# Naming Conventions

## Files

Use PascalCase for React components.

Examples

```text
Header.tsx
TaskCard.tsx
StatisticsCard.tsx
```

Use camelCase for utility and service files.

Examples

```text
task.service.ts
dateFormatter.ts
useTasks.ts
```

---

# Import Order

Follow a consistent import order.

1. React / Next.js
2. Third-party libraries
3. Internal components
4. Hooks
5. Services
6. Types
7. Utilities
8. CSS

This improves readability.

---

# Component Rules

Every component should:

* Have one responsibility.
* Be reusable when possible.
* Be strongly typed.
* Avoid duplicate code.
* Follow the Design System.

---

# Route Organization

Example

```text
Dashboard

/dashboard

Tasks

/tasks

Task Details

/tasks/1

Analytics

/analytics

Settings

/settings
```

Each page should have its own route.

---

# Future Folder Additions

As the application grows, we may add:

```text
context/
providers/
middleware/
graphql/
tests/
```

These folders will be introduced only when needed.

---

# Best Practices

* Keep files small and focused.
* Prefer composition over large components.
* Do not mix business logic with UI.
* Reuse existing components before creating new ones.
* Keep folder names meaningful.
* Follow consistent naming conventions.

---

# Notes

This folder structure is intended to support long-term growth.

As new features are added, developers should follow the same organizational principles to keep the project clean, scalable, and easy to understand.

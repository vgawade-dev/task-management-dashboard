# TaskFlow - Component Architecture

## Version

**Version:** 1.0

---

# Purpose

This document defines the component architecture for the TaskFlow application.

Its goal is to ensure components are reusable, maintainable, scalable, and follow the Single Responsibility Principle (SRP).

Each component should have one clear responsibility and should not contain unrelated business logic.

---

# Component Hierarchy

```text
TaskFlow
│
├── Layout Components
│   ├── Header
│   ├── Sidebar
│   ├── Footer
│   └── PageContainer
│
├── UI Components
│   ├── Button
│   ├── Card
│   ├── Input
│   ├── Badge
│   ├── Avatar
│   ├── SearchBar
│   ├── Modal
│   ├── Spinner
│   ├── Dropdown
│   └── Toast
│
├── Dashboard Components
│   ├── WelcomeBanner
│   ├── StatisticsCard
│   ├── RecentTasks
│   └── ActivityFeed
│
├── Task Components
│   ├── TaskCard
│   ├── TaskRow
│   ├── TaskTable
│   ├── TaskForm
│   ├── TaskFilter
│   └── TaskDetails
│
└── Profile Components
    ├── ProfileCard
    ├── UserMenu
    └── NotificationPanel
```

---

# Layout Components

## Header

### Responsibility

Display the application branding and top navigation.

### Contains

* Logo
* Search Bar
* Notifications
* User Profile

### Reusable

Yes

---

## Sidebar

### Responsibility

Display the main application navigation.

### Contains

* Dashboard
* Tasks
* Calendar
* Analytics
* Team
* Settings

### Reusable

Yes

---

## Footer

### Responsibility

Display footer information.

Initially hidden for dashboard pages.

---

## PageContainer

### Responsibility

Provide consistent spacing and width for every page.

---

# UI Components

These components should never contain business logic.

They are purely presentational.

---

## Button

### Responsibility

Render a reusable button.

### Variants

* Primary
* Secondary
* Danger

### Future Props

* variant
* disabled
* loading
* onClick

---

## Card

### Responsibility

Reusable content container.

Used by

* Statistics
* Profile
* Dashboard
* Analytics

---

## Input

### Responsibility

Reusable text input.

Future support

* Validation
* Error state
* Helper text

---

## Badge

### Responsibility

Display task status.

Variants

* Completed
* Pending
* In Progress
* Cancelled

---

## Avatar

### Responsibility

Display user profile image.

Fallback

Display user initials.

---

## SearchBar

### Responsibility

Search tasks and users.

---

## Modal

### Responsibility

Reusable popup window.

Examples

* Add Task
* Delete Confirmation
* Edit Task

---

## Spinner

### Responsibility

Display loading state.

---

## Dropdown

### Responsibility

Reusable selection component.

---

## Toast

### Responsibility

Display success and error messages.

---

# Dashboard Components

## WelcomeBanner

Displays a personalized greeting.

Example

Good Morning, Vedanti 👋

---

## StatisticsCard

Displays:

* Icon
* Title
* Value
* Trend

Examples

* Total Tasks
* Completed
* Pending
* Overdue

---

## RecentTasks

Displays the latest tasks assigned to the user.

---

## ActivityFeed

Displays recent user activity.

---

# Task Components

## TaskCard

Used for mobile layouts.

Displays

* Title
* Status
* Priority
* Due Date

---

## TaskRow

Represents one row in the task table.

---

## TaskTable

Displays all tasks.

Contains

* Header
* Rows
* Pagination

---

## TaskForm

Used for:

* Add Task
* Edit Task

Contains

* Title
* Description
* Due Date
* Priority
* Status

---

## TaskFilter

Contains

* Search
* Status
* Priority

---

## TaskDetails

Displays complete task information.

---

# Profile Components

## ProfileCard

Displays

* Avatar
* Name
* Role

---

## UserMenu

Contains

* Profile
* Settings
* Logout

---

## NotificationPanel

Displays recent notifications.

---

# Component Communication

```text
Dashboard Page
│
├── Header
│
├── Sidebar
│
├── WelcomeBanner
│
├── StatisticsCard
│      │
│      ├── Card
│      └── Badge
│
├── RecentTasks
│      │
│      ├── TaskTable
│      └── TaskRow
│
└── ActivityFeed
```

---

# Folder Organization

```text
components/
│
├── layout/
├── ui/
├── dashboard/
├── task/
└── profile/
```

Each folder contains only related components.

---

# Naming Conventions

Component names should:

* Use PascalCase
* Match the file name
* Represent one responsibility

Examples

Good

* Header.tsx
* TaskCard.tsx
* StatisticsCard.tsx

Avoid

* component.tsx
* data.tsx
* index.tsx (unless used intentionally for exports)

---

# Component Design Rules

* One component = One responsibility
* Keep components small
* Reuse before creating new ones
* Avoid duplicate UI
* Separate UI from business logic
* Prefer composition over duplication

---

# Future Enhancements

* Shared Layout Wrapper
* Theme Provider
* Error Boundary
* Skeleton Components
* Pagination Component
* Data Table Component
* Breadcrumb Component
* Empty State Component

---

# Notes

This component architecture serves as the blueprint for frontend development.

Every new feature should reuse existing UI components whenever possible before introducing new ones.

The objective is to build a scalable, maintainable, and production-ready React and Next.js application.

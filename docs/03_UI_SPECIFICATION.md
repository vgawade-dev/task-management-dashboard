# TaskFlow - UI Specification

## Version

**Version:** 1.0

---

# Purpose

This document defines the user interface structure, layout, navigation flow, responsive behavior, and component placement for the TaskFlow application.

It acts as the implementation guide for frontend development.

---

# Application Structure

```text
TaskFlow
│
├── Login (Future)
│
├── Dashboard
│
├── Tasks
│
├── Calendar
│
├── Analytics
│
├── Team
│
├── Profile
│
└── Settings
```

---

# Global Application Layout

Every authenticated page will use the same layout.

```text
+----------------------------------------------------------------------------------+
| Header                                                                           |
| Logo        Search                    Notifications        Profile               |
+----------------------------------------------------------------------------------+
| Sidebar                     |                                                   |
| Dashboard                   |                                                   |
| Tasks                       |                                                   |
| Calendar                    |               Main Content                         |
| Analytics                   |                                                   |
| Team                        |                                                   |
| Settings                    |                                                   |
|                              |                                                  |
+------------------------------+--------------------------------------------------+
```

---

# Header Specification

Height

72px

Position

Fixed at the top

Contents

* Application logo
* Search bar
* Notifications icon
* User profile
* User avatar

Behavior

* Always visible
* Shadow on scroll
* Responsive
* Sticky while scrolling

---

# Sidebar Specification

Width

260px

Desktop

Always visible

Tablet

Collapsible

Mobile

Hidden by default

Opened using a hamburger menu.

Navigation Items

* Dashboard
* Tasks
* Calendar
* Analytics
* Team
* Settings

Behavior

* Active menu highlighted
* Hover effect
* Icons with labels
* Smooth collapse animation (future)

---

# Dashboard Page

Purpose

Provide a quick overview of work.

Layout

```text
Welcome Back

+-------------+ +-------------+ +-------------+ +-------------+
| Total Tasks | | Completed   | | In Progress | | Pending     |
+-------------+ +-------------+ +-------------+ +-------------+

---------------------------------------------------------------
Recent Tasks
---------------------------------------------------------------

Task Name

Priority

Status

Due Date

---------------------------------------------------------------

Recent Activity

---------------------------------------------------------------
```

Components Used

* Header
* Sidebar
* Stats Card
* Task Table
* Activity Card

---

# Tasks Page

Purpose

Manage all project tasks.

Layout

```text
------------------------------------------------------------
Tasks

Search ____________________________

Filter

Status ▼

Priority ▼

+ Add Task

------------------------------------------------------------

Task Table

------------------------------------------------------------
```

Components Used

* Search Bar
* Filter Dropdown
* Button
* Task Table
* Pagination (Future)

---

# Calendar Page

Purpose

Display tasks by date.

Components

* Calendar
* Task Summary
* Upcoming Deadlines

Future Integration

Calendar library.

---

# Analytics Page

Purpose

Display productivity insights.

Widgets

* Completion Rate
* Pending Tasks
* Weekly Progress
* Monthly Activity

Future

Charts using Chart.js or Recharts.

---

# Team Page

Purpose

Display team members.

Each member card contains

* Avatar
* Name
* Role
* Assigned Tasks

---

# Profile Page

Purpose

Manage user information.

Sections

* Personal Information
* Password
* Notifications
* Preferences

---

# Settings Page

Purpose

Configure application preferences.

Sections

* Theme
* Language (Future)
* Notification Settings
* Account Settings

---

# Component Placement

Header

```text
Logo

Search

Notifications

Profile
```

Sidebar

```text
Dashboard

Tasks

Calendar

Analytics

Team

Settings
```

Dashboard

```text
Welcome Section

↓

Statistics Cards

↓

Recent Tasks

↓

Recent Activity
```

---

# Navigation Flow

```text
Dashboard

↓

Tasks

↓

Task Details

↓

Edit Task

↓

Save

↓

Dashboard
```

Future

Dashboard

↓

Analytics

↓

Reports

↓

Export

---

# Responsive Behavior

Desktop

≥1200px

* Sidebar visible
* Four statistics cards in one row

Tablet

768px–1199px

* Sidebar collapsible
* Two cards per row

Mobile

<768px

* Sidebar hidden
* Hamburger menu
* One card per row

---

# Loading States

Future

* Skeleton cards
* Skeleton tables
* Loading spinner

---

# Empty States

Example

No tasks found.

Display

* Illustration
* Helpful message
* "Create Task" button

---

# Error States

Examples

Network Error

API Failure

Unauthorized Access

Each error page should include

* Message
* Retry button

---

# Success States

Examples

Task created successfully.

Task updated successfully.

Task deleted successfully.

Display

Toast notification.

---

# Accessibility

All pages must support

* Keyboard navigation
* Screen readers
* Proper labels
* Visible focus indicators

---

# Future Screens

* Login
* Forgot Password
* Register
* Notifications
* User Management
* Admin Dashboard

---

# UI Development Order

Sprint 4

* Header
* Sidebar
* Application Layout

Status: implemented in the current codebase.

Sprint 5

* Dashboard Cards

Sprint 6

* Task Table

Sprint 7

* Search & Filters

Sprint 8

* Forms

Sprint 9

* Analytics

Sprint 10

* Profile & Settings

Sprint 11

* Dark Mode

Sprint 12

* GraphQL Integration

---

# Notes

The goal of this UI specification is to ensure every screen follows a consistent layout, spacing system, and navigation pattern defined in the Design System.

Any new page or feature should conform to this specification before implementation.

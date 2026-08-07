# TaskFlow - Design System

## Version

**Version:** 1.0

---

# Design Principles

The TaskFlow design system is based on the following principles:

* Clean and minimal interface
* Consistent spacing and alignment
* Reusable UI components
* Accessibility-first design
* Responsive across desktop, tablet, and mobile
* Professional SaaS dashboard appearance

---

# Color Palette

## Primary Colors

| Name               | Hex     | Usage                                     |
| ------------------ | ------- | ----------------------------------------- |
| Primary Blue       | #2563EB | Primary buttons, active navigation, links |
| Primary Blue Hover | #1D4ED8 | Hover state                               |

---

## Neutral Colors

| Name       | Hex     | Usage                  |
| ---------- | ------- | ---------------------- |
| White      | #FFFFFF | Cards, panels          |
| Background | #F8FAFC | Application background |
| Slate 50   | #F8FAFC | Light backgrounds      |
| Slate 100  | #F1F5F9 | Borders and sections   |
| Slate 300  | #CBD5E1 | Disabled borders       |
| Slate 500  | #64748B | Secondary text         |
| Slate 700  | #334155 | Icons                  |
| Slate 900  | #0F172A | Sidebar, headings      |

---

## Semantic Colors

| Name    | Hex     | Usage                  |
| ------- | ------- | ---------------------- |
| Success | #22C55E | Completed tasks        |
| Warning | #F59E0B | Pending tasks          |
| Error   | #EF4444 | Delete actions, errors |
| Info    | #0EA5E9 | Information messages   |

---

# Typography

## Font Family

Primary Font

```text
Inter
```

Fallback

```text
sans-serif
```

---

## Font Sizes

| Element         | Size | Weight    |
| --------------- | ---- | --------- |
| Page Title      | 32px | Bold      |
| Section Heading | 24px | Semi Bold |
| Card Title      | 18px | Medium    |
| Body Text       | 16px | Regular   |
| Small Text      | 14px | Regular   |
| Caption         | 12px | Regular   |

---

# Spacing System

TaskFlow follows an **8-point spacing system**.

| Token | Value |
| ----- | ----- |
| XS    | 4px   |
| SM    | 8px   |
| MD    | 16px  |
| LG    | 24px  |
| XL    | 32px  |
| XXL   | 48px  |
| XXXL  | 64px  |

All margins and padding should use these spacing values.

---

# Border Radius

| Component | Radius      |
| --------- | ----------- |
| Button    | 8px         |
| Card      | 12px        |
| Input     | 8px         |
| Modal     | 16px        |
| Avatar    | Full Circle |

---

# Shadows

## Card

Soft shadow

## Dropdown

Medium shadow

## Modal

Large shadow

Shadows should remain subtle to keep the interface clean.

---

# Buttons

## Primary Button

Purpose

* Save
* Add Task
* Submit

Style

* Blue background
* White text
* Rounded corners
* Hover state

---

## Secondary Button

Purpose

* Cancel
* Back
* Close

Style

* White background
* Gray border
* Dark text

---

## Danger Button

Purpose

* Delete
* Remove

Style

* Red background
* White text

---

# Form Components

Every form should follow the same structure.

Label

↓

Input

↓

Helper Text (Optional)

↓

Error Message (If Required)

---

Input Height

48px

Border Radius

8px

Padding

16px

---

# Cards

Every dashboard card should have:

* White background
* Rounded corners
* Soft shadow
* Consistent padding
* Equal spacing

Cards should never contain inconsistent spacing or colors.

---

# Badges

Badges indicate task status.

## Status

Completed

Color

Green

---

Pending

Color

Orange

---

In Progress

Color

Blue

---

Cancelled

Color

Red

---

# Icons

Recommended icon library

Lucide React

Examples

* Dashboard
* Tasks
* Calendar
* Analytics
* Team
* Notifications
* Settings
* Search

Icons should be consistent throughout the application.

---

# Header

Height

72px

Contains

* Logo
* Search
* Notifications
* User Profile

Header remains fixed at the top.

---

# Sidebar

Width

260px

Contains

* Dashboard
* Tasks
* Calendar
* Analytics
* Team
* Settings

Sidebar remains fixed on desktop.

Collapsed sidebar support will be added later.

---

# Dashboard Cards

Each statistics card contains:

* Icon
* Title
* Value
* Trend Indicator

Example

* Total Tasks
* Completed
* Pending
* Overdue

---

# Tables

Used for task listing.

Columns

* Task Name
* Priority
* Status
* Due Date
* Assignee
* Actions

Tables should support:

* Sorting
* Filtering
* Pagination (Later)

---

# Responsive Design

## Desktop

1200px and above

* Sidebar visible
* Multi-column layout

---

## Tablet

768px – 1199px

* Sidebar collapses
* Two-column layout where appropriate

---

## Mobile

Below 768px

* Sidebar becomes a drawer
* Header remains visible
* Single-column layout

---

# Accessibility Guidelines

* Sufficient color contrast
* Keyboard navigation
* Visible focus states
* Semantic HTML
* Accessible form labels

---

# Design Rules

* Never use random colors.
* Never use inconsistent spacing.
* Reuse existing UI components whenever possible.
* Keep the interface clean and uncluttered.
* Every new component should follow this design system.

---

# Future Enhancements

* Dark Mode
* Theme Switching
* Design Tokens
* Animation Guidelines
* Skeleton Loaders
* Charts and Data Visualizations
* Component Variants
* Internationalization (i18n) Support

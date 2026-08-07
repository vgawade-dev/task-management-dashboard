# TaskFlow - API Plan

## Version

**Version:** 1.0

---

# Purpose

This document defines how the frontend communicates with backend services.

Initially, the project will use mock data to build the UI.

Later, mock data will be replaced with GraphQL APIs without changing the UI components.

---

# Backend Architecture

```text
Frontend (Next.js)

↓

GraphQL API

↓

Backend Services

↓

Database
```

---

# API Communication Flow

```text
User

↓

Button Click

↓

GraphQL Query / Mutation

↓

Backend

↓

Database

↓

Response

↓

Update UI
```

---

# Authentication Flow (Future)

```text
Login

↓

Receive JWT Token

↓

Store Securely

↓

Attach Token to Every Request

↓

Backend Validation

↓

Response
```

---

# Main Entities

## User

Fields

* id
* firstName
* lastName
* email
* avatar
* role

---

## Task

Fields

* id
* title
* description
* status
* priority
* dueDate
* assignee
* createdAt
* updatedAt

---

## Dashboard

Fields

* totalTasks
* completedTasks
* pendingTasks
* overdueTasks

---

# GraphQL Queries

Future Queries

```graphql
GetDashboard

GetTasks

GetTask

GetProfile

GetNotifications
```

---

# GraphQL Mutations

```graphql
CreateTask

UpdateTask

DeleteTask

Login

Logout
```

---

# Frontend Data Flow

```text
Page

↓

Service Layer

↓

Apollo Client

↓

GraphQL API
```

---

# Loading States

Every request should support

* Loading Spinner
* Skeleton Loader

---

# Error Handling

Possible Errors

* Network Error
* Authentication Error
* Validation Error
* Server Error

Each error should display a user-friendly message.

---

# Caching

Apollo Client cache will be used.

Benefits

* Faster UI
* Reduced network requests
* Better user experience

---

# Folder Structure

```text
lib/
    apolloClient.ts

services/
    task.service.ts
    user.service.ts
```

---

# Future Enhancements

* Pagination
* Infinite Scrolling
* Optimistic Updates
* Real-time Subscriptions
* File Uploads

---

# Notes

The frontend should never directly communicate with the database.

All communication must go through GraphQL APIs.

# Full-Stack Messaging App

A simple full-stack messaging application built with React, Node.js, Express, TypeScript, and PostgreSQL.

## Features

- View a list of messages.
- Add new messages with a sender name and content.
- Delete existing messages.

## Tech Stack

- **Frontend:**
  - React
  - TypeScript
  - Vite (Build Tool)
  - Axios (HTTP Client)
  - CSS (Styling)
- **Backend:**
  - Node.js
  - Express
  - TypeScript
  - PostgreSQL (Database)
  - `pg` (Node.js PostgreSQL client)
- **Development:**
  - `ts-node-dev` (TypeScript execution and development)
  - `dotenv` (Environment variable management)

## Project Structure

```
FS_APP/
├── client/         # React Frontend Application
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   ├── types/
│   │   ├── App.css      # Main CSS file
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── index.html
│   ├── package.json
│   └── tsconfig.json
│
├── server/         # Node.js/Express Backend Application
│   ├── src/
│   │   ├── dbSql.ts
│   │   ├── index.ts
│   │   └── schema.sql
│   ├── .env          # Environment variables
│   ├── package.json
│   └── tsconfig.json
│
└── README.md       # This file
```

## Prerequisites

- Node.js (v16 or later recommended)
- npm or yarn
- PostgreSQL server installed and running

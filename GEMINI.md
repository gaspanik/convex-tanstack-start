# Convex + TanStack Start Project

This project is a modern full-stack web application starter that combines **Convex** for the real-time backend and database with **TanStack Start** (built on TanStack Router) for the frontend and server-side rendering.

## 🛠️ Tech Stack

- **Framework:** React 19
- **Meta-Framework:** TanStack Start
- **Routing:** TanStack Router (File-based routing)
- **Backend & Database:** Convex (Serverless functions, real-time updates)
- **Data Fetching:** TanStack Query (integrated via `@convex-dev/react-query`)
- **Styling:** Tailwind CSS v4
- **Build Tool:** Vite
- **Language:** TypeScript

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Initialize Convex
If this is your first time running the project, set up your Convex project:
```bash
npx convex dev
```
Follow the prompts to log in and create/select a project. This will generate your `.env.local` file.

### 3. Start Development Server
Start the Convex backend and the Vite frontend dev server concurrently:
```bash
npm run dev
```
The application will be available at `http://localhost:3000`.

## 📦 Key Commands

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the full development environment (Convex + Web). |
| `npm run dev:web` | Starts only the Vite frontend dev server. |
| `npm run dev:convex` | Starts only the Convex backend dev server. |
| `npm run build` | Builds the application for production (Vite build + Type check). |
| `npm run start` | Runs the production build. |
| `npm run lint` | Runs TypeScript type checking and ESLint. |
| `npm run format` | Formats code using Prettier. |

## 📂 Project Structure

```
/
├── convex/                 # Convex backend code
│   ├── myFunctions.ts      # Query and Mutation definitions
│   ├── schema.ts           # Database schema definition
│   └── _generated/         # Auto-generated Convex types (do not edit)
├── src/                    # Frontend source code
│   ├── routes/             # File-based routes (TanStack Router)
│   │   ├── __root.tsx      # Root layout
│   │   └── index.tsx       # Home page
│   ├── styles/             # Global styles (Tailwind)
│   ├── router.tsx          # Router configuration
│   └── routeTree.gen.ts    # Auto-generated route tree (do not edit)
├── public/                 # Static assets
├── .env.local              # Environment variables (Convex URL)
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite configuration
```

## 💻 Development Workflow

### Adding Backend Logic
1.  Edit `convex/myFunctions.ts` (or create new files in `convex/`).
2.  Define `query` (read-only) or `mutation` (write) functions.
3.  Convex will automatically regenerate types in `convex/_generated/`.

### Modifying the Database Schema
1.  Edit `convex/schema.ts`.
2.  Define tables and fields using `defineTable` and `v` (validator).
3.  This ensures type safety for all database operations.

### Adding New Routes
1.  Create a new file in `src/routes/`.
    *   Example: `src/routes/about.tsx` creates `/about`.
2.  Use `createFileRoute` to define the route component.
3.  TanStack Router will automatically update `src/routeTree.gen.ts`.

### Styling
*   Tailwind CSS v4 is configured.
*   Edit `src/styles/app.css` for global styles or Tailwind config.
*   Use utility classes directly in your React components.

## 🧩 Key Libraries & Documentation

-   [Convex Documentation](https://docs.convex.dev)
-   [TanStack Start / Router Documentation](https://tanstack.com/router/latest)
-   [TanStack Query Documentation](https://tanstack.com/query/latest)
-   [Tailwind CSS Documentation](https://tailwindcss.com/docs)

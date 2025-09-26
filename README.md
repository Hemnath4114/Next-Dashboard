# Next.js Dashboard App

A modern full-stack dashboard application built with Next.js 13+, React, and Tailwind CSS.  
This project demonstrates App Router, server & client components, authentication, API routes, and responsive UI design.

<<<<<<< HEAD
For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.

## Deploying to Render

1. Environment variables
   - `POSTGRES_URL` = your Postgres connection string (copy of `DATABASE_URL`)
   - `NEXTAUTH_URL` = `https://<your-service>.onrender.com`
   - `AUTH_SECRET` = a long random string
   - `AUTH_TRUST_HOST` = `true`

2. Service settings
   - Node: 20
   - Install Command: `pnpm i --frozen-lockfile`
   - Build Command: `pnpm build`
   - Start Command: `pnpm start`

3. First run
   - Open `/seed` once to create tables and seed data
   - Go to `/login` to sign in (credentials come from `app/lib/placeholder-data.ts`)

Notes
- DB connections read `POSTGRES_URL` or `DATABASE_URL` and require SSL
- Seeding uses `pgcrypto` with `gen_random_uuid()` for UUIDs
=======
---

## Features

- Next.js App Router for routing and layouts  
- Authentication (login/logout with middleware)  
- Dashboard pages (Overview, Invoices, Customers)  
- CRUD for invoices (create, edit, delete, error handling)  
- Charts & Cards with dynamic data  
- Server Actions & API routes  
- Responsive UI with Tailwind CSS  
- Reusable components (tables, forms, buttons, navigation)  
- ESLint & TypeScript for clean code  

---

## Tech Stack

- **Frontend**: Next.js 13+, React 18, TypeScript  
- **Styling**: Tailwind CSS, CSS Modules  
- **State & Data**: Server Components, Client Components, Server Actions  
- **Charts**: Recharts  
- **Auth**: Middleware with session handling  
- **Build Tooling**: pnpm / npm  

---

## Project Structure

Next-Dashboard-main/
│── app/ # App Router pages & layouts
│ ├── auth.ts # Auth utilities
│ ├── layout.tsx # Root layout
│ ├── page.tsx # Landing page
│ ├── dashboard/ # Dashboard routes
│ │ ├── customers/ # Customers page
│ │ ├── invoices/ # Invoices CRUD
│ │ └── (overview)/ # Dashboard overview
│ ├── lib/ # Helpers (data, utils, types)
│ ├── ui/ # Reusable UI components
│ ├── login/ # Login page
│ └── middleware.ts # Auth middleware
│
│── public/ # Static assets
│── .eslintrc.json # ESLint config
│── tailwind.config.ts # Tailwind config
│── tsconfig.json # TypeScript config
│── package.json # Dependencies & scripts
│── pnpm-lock.yaml # Lockfile

yaml
Copy code

---

## Getting Started

### 1. Clone the repo
```

git clone https://github.com/your-username/next-dashboard.git
cd next-dashboard
```
### 2. Install dependencies
```

# with pnpm (recommended)
pnpm install

# or with npm
npm install
```

### 3. Run the development server
```
pnpm dev
```
App will run at: http://localhost:3000

### Available Scripts
pnpm dev → Start development server

pnpm build → Build for production

pnpm start → Start production server

pnpm lint → Run ESLint

### Deployment
This project is optimized for Vercel deployment:

1. Push your code to GitHub/GitLab

2. Connect repo to Vercel

3. Deploy instantly with CI/CD

### Contribution Guidelines
1. Fork the repo & create a new branch (feature/my-feature)

2. Commit changes with meaningful messages

3. Push branch & create a Pull Request

### License

This project is licensed under the MIT License.
Feel free to use and modify for personal or commercial projects.
```
pgsql

Do you want me to also **add demo screenshot/GIF placeholders** inside the README so it looks great when uploaded to GitHub?

```
>>>>>>> 7a814ab5300becf5fdbfb50f8c1ac9be06fb1589

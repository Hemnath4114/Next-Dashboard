## Next.js App Router Course - Starter

This is the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application.

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

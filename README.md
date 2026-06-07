# DocuFlow — scaffold

This branch provides a frontend scaffold (React + TypeScript + Tailwind + Vite) and a minimal Node/Express backend with JWT-based auth and PDF endpoints.

Priority features included as stubs:
- JWT-based auth flow (access + refresh stored client-side; server stubs provided)
- Secure upload endpoint skeleton for PDFs
- Server-side PDF modification example using pdf-lib (stub)
- Tokenized public signature link route (stub)
- Audit log skeleton (console/file)
- Status lifecycle support as a field on documents

Run locally

1. Server
   cd server
   npm install
   npm run dev

2. Client
   cd client
   npm install
   npm run dev

Environment
- Copy server/.env.example to server/.env and fill values (JWT secrets, DB URL)

Next steps
- Implement database persistence (Postgres/Supabase)
- Flesh out pdf-lib modification logic and signature placement
- Implement audit log persistence and IP capture

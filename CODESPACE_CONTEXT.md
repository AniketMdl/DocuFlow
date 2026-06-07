# DocuFlow — Codespace / Devcontainer Context

Project summary

The Document Signature App is a secure, full-stack web application that enables users to upload documents, place digital signatures, share signing links, and generate legally traceable signed PDFs — similar to platforms like DocuSign and Adobe Sign.

The app eliminates the need for physical paperwork by allowing documents to be signed electronically with full audit trails, signer identity verification, and document integrity. It is designed with real-world enterprise workflows in mind, including authentication, document ownership, status tracking, and signature history.

This project demonstrates how modern SaaS products handle file security, digital trust, and collaborative workflows at scale.

Primary aims

- Build a production-ready digital signature system
- Understand end-to-end document lifecycle management
- Learn how secure SaaS platforms are architected
- Simulate real enterprise-grade backend and frontend workflows
- Gain hands-on experience with PDF processing, audit logging, and token-based access

This project is not just a CRUD app — it models real business logic used in legal, HR, finance, and enterprise software.

Why this matters

- Manual document signing is slow and error-prone
- Physical paperwork is hard to track and store
- Emailing PDFs back and forth has no auditability
- No visibility into who signed, when, and from where
- Risk of document tampering after signatures

This app addresses all of these with secure uploads, signature coordinates, immutable signed PDFs, and audit trails.

Key features that mimic industry standards

- JWT-based authentication
- Secure PDF upload & access control
- Drag-and-drop signature placement
- Server-side PDF modification (PDF-Lib)
- Tokenized public signature links
- Audit logs with timestamps & IP
- Status lifecycle: Pending → Signed → Rejected
- Deployment-ready architecture

These are the exact patterns used in enterprise SaaS products.

Where this file is used

- Place this file at the repo root as CODESPACE_CONTEXT.md. Codespaces, Devcontainers, and any assistance tool/script should read this file on startup to obtain the high-level project context, run steps, env variables, and endpoints.

Quick tech stack

- Frontend: React (Vite) + Tailwind CSS
- Backend: Node.js + Express
- Database: MongoDB Atlas (Mongoose)
- Key libs: pdf-lib, multer, bcryptjs, jsonwebtoken
- Dev tools: nodemon, Vite, devcontainer / Codespaces

Quick start (Codespace / Devcontainer)

1. Reopen in Container or open a Codespace on branch feature/codespace-helpers.
2. Codespace/devcontainer post-create should run install commands (see .devcontainer/devcontainer.json). If not, run:
   (cd server && npm ci) && (cd client && npm ci)
3. Copy server/.env.example to server/.env and set the following values (do not commit .env):
   MONGODB_URI="mongodb+srv://<user>:<password>@<host>/<db>?retryWrites=true&w=majority"
   PORT=5000
   JWT_SECRET=replace_with_a_random_secret
4. Start the backend:
   cd server && npm run dev
5. Start the frontend in a second terminal:
   cd client && npm run dev
6. Verify endpoints:
   - Backend health: GET http://localhost:5000/api/health
   - Frontend: open the Vite URL shown in terminal (http://127.0.0.1:5173)

Important env variables

- MONGODB_URI — MongoDB Atlas connection string
- PORT — server port (default 5000)
- JWT_SECRET — secret used to sign JWTs (generate a long random secret)
- ACCESS_TOKEN_EXPIRES_IN (optional) — e.g. 15m
- REFRESH_TOKEN_EXPIRES_IN (optional) — e.g. 7d

Dev ports used

- Backend: 5000
- Frontend (Vite): 5173

Common tasks (VS Code tasks / CI-friendly)

- Install deps: (cd server && npm ci) && (cd client && npm ci)
- Start backend (dev): cd server && npm run dev
- Start frontend (dev): cd client && npm run dev
- Full dev (two terminals): run both commands above

Key API endpoints (planned/current)

- GET /api/health
- GET /api/hello
- POST /api/auth/register
- POST /api/auth/login
- POST /api/documents (upload)
- GET /api/documents/:id
- POST /api/sign/:documentId (server-side sign or place signature)

Troubleshooting

- Mongo connection failures: ensure IP is whitelisted in Atlas and MONGODB_URI is correct; rotate exposed credentials immediately.
- CORS: enable the frontend dev origin or proxy /api in Vite config.
- Large installs: run npm ci in codespace to ensure reproducible installs.

How this helps an assistant/chatbot

- A single source of truth for project goals, tech stack and run steps so the assistant does not need a long re-introduction each time. Add this file to the project root and any automated assistant or prompt tool can read it programmatically.


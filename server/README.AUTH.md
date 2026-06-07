Added authentication (Day 2) implementation:

Files added/updated on branch feature/day2-auth:
- server/package.json (added bcryptjs and jsonwebtoken)
- server/models/User.js (Mongoose User schema)
- server/controllers/authController.js (register & login handlers)
- server/routes/auth.js (auth endpoints)
- server/middleware/auth.js (JWT auth middleware)
- server/server.js (mounts /api/auth)
- server/.env.example (added ACCESS_TOKEN_EXPIRES_IN & BCRYPT_SALT_ROUNDS)
- PROGRESS.md updated to mark Day 2 done

How to test locally:
1) Checkout the branch:
   git fetch origin
   git checkout feature/day2-auth

2) Install server deps and run
   cd server
   npm install
   cp .env.example .env
   # Edit server/.env: set MONGODB_URI to your Atlas URI and JWT_SECRET to a strong secret
   npm run dev

3) Register a user:
   curl -X POST http://localhost:5000/api/auth/register -H "Content-Type: application/json" -d '{"name":"Test","email":"test@example.com","password":"P@ssw0rd"}'

4) Login:
   curl -X POST http://localhost:5000/api/auth/login -H "Content-Type: application/json" -d '{"email":"test@example.com","password":"P@ssw0rd"}'

Expected results:
- Register returns 201 with user id, name, email (no password)
- Login returns 200 with { "token": "<JWT>" }

Next steps I can take for you:
- Protect document upload & sign routes with the auth middleware
- Add refresh tokens and logout
- Add basic tests for auth flows
- Open a PR from feature/day2-auth -> main

Added GET /api/auth/me (protected) and refresh token support (refresh/logout) on feature/day2-auth.

Files added/updated:
- server/models/RefreshToken.js (new)
- server/controllers/authController.js (updated: login returns refresh token; added refresh, logout, me handlers)
- server/routes/auth.js (added /refresh, /logout, /me)
- server/.env.example (added REFRESH_TOKEN_EXPIRES_IN)

How to test:
1) Start server (ensure env has JWT_SECRET & MONGODB_URI)
2) Register/login to receive { token, refreshToken }
3) Call GET /api/auth/me with Authorization: Bearer <token> to verify middleware
4) Use POST /api/auth/refresh with { "refreshToken": "..." } to rotate tokens
5) Use POST /api/auth/logout with { "refreshToken": "..." } to revoke refresh token


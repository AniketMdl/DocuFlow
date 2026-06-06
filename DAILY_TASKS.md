# DocuFlow - Daily Task Breakdown & Commit Commands

## ✅ Day 1: Project Setup & MERN Folder Structure

**What to do:**
- Initialize MERN folder structure ✅
- Create README.md ✅
- Create .gitignore ✅
- Create backend package.json ✅
- Create frontend package.json ✅
- Create environment template ✅

**Commit Command:**
```bash
git add -A
git commit -m "Day 1: Setup MERN folder structure with backend and frontend configuration"
git push origin main
```

---

## Day 2: Backend Setup - Express Server & MongoDB Connection

**What to do:**
- [ ] Create `server/server.js` - Express server entry point
- [ ] Create `server/config/db.js` - MongoDB connection
- [ ] Install dependencies: `cd server && npm install`
- [ ] Test server startup

**Code to Add:**

**server/server.js:**
```javascript
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Test Route
app.get('/api/health', (req, res) => {
  res.json({ message: 'Server is running!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

**server/config/db.js:**
```javascript
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
```

**Commit Command:**
```bash
git add server/server.js server/config/db.js
git commit -m "Day 2: Configure Express server and MongoDB connection"
git push origin main
```

---

## Day 3: Database Models - User & Document Schemas

**What to do:**
- [ ] Create User model
- [ ] Create Document model
- [ ] Create Workflow model
- [ ] Add validation

**Files to Create:**
- `server/models/User.js`
- `server/models/Document.js`
- `server/models/Workflow.js`

**Commit Command:**
```bash
git add server/models/
git commit -m "Day 3: Create database models and schemas for users, documents, and workflows"
git push origin main
```

---

## Day 4: Authentication System - JWT & Login

**What to do:**
- [ ] Create authentication routes
- [ ] Implement JWT token generation
- [ ] Password hashing with bcryptjs
- [ ] Create protected route middleware

**Files to Create:**
- `server/routes/auth.js`
- `server/controllers/authController.js`
- `server/middleware/auth.js`

**Commit Command:**
```bash
git add server/routes/auth.js server/controllers/ server/middleware/
git commit -m "Day 4: Implement authentication system with JWT and password hashing"
git push origin main
```

---

## Day 5: React Frontend Setup & Components

**What to do:**
- [ ] Setup React app
- [ ] Create basic layout
- [ ] Setup routing
- [ ] Create Navigation component

**Files to Create:**
- `client/src/App.js`
- `client/src/components/Navbar.js`
- `client/src/components/Sidebar.js`
- `client/src/index.js`

**Commit Command:**
```bash
git add client/src/
git commit -m "Day 5: Setup React frontend with routing and basic layout components"
git push origin main
```

---

## Day 6: Authentication UI - Login & Register Pages

**What to do:**
- [ ] Create login page
- [ ] Create register page
- [ ] Form validation
- [ ] Error handling UI

**Files to Create:**
- `client/src/pages/Login.js`
- `client/src/pages/Register.js`
- `client/src/styles/auth.css`

**Commit Command:**
```bash
git add client/src/pages/ client/src/styles/
git commit -m "Day 6: Create authentication UI with login and registration forms"
git push origin main
```

---

## Day 7: Document Upload & Management APIs

**What to do:**
- [ ] Create upload endpoint
- [ ] Setup file handling
- [ ] Create document retrieval endpoint
- [ ] Add error handling

**Files to Create:**
- `server/routes/documents.js`
- `server/controllers/documentController.js`
- `server/middleware/upload.js`

**Commit Command:**
```bash
git add server/routes/documents.js server/controllers/documentController.js server/middleware/upload.js
git commit -m "Day 7: Implement document upload and retrieval API endpoints"
git push origin main
```

---

## Day 8: Document Display & List UI

**What to do:**
- [ ] Create documents list page
- [ ] Create document details page
- [ ] File preview
- [ ] Search UI

**Files to Create:**
- `client/src/pages/DocumentList.js`
- `client/src/pages/DocumentDetails.js`
- `client/src/components/DocumentCard.js`

**Commit Command:**
```bash
git add client/src/pages/ client/src/components/
git commit -m "Day 8: Create document list and details pages with search functionality"
git push origin main
```

---

## Day 9: Workflow Creation & Management

**What to do:**
- [ ] Create workflow routes
- [ ] Workflow controller
- [ ] Workflow UI components

**Files to Create:**
- `server/routes/workflows.js`
- `server/controllers/workflowController.js`
- `client/src/pages/Workflows.js`

**Commit Command:**
```bash
git add server/routes/workflows.js server/controllers/workflowController.js client/src/pages/Workflows.js
git commit -m "Day 9: Implement workflow creation and management features"
git push origin main
```

---

## Day 10: Advanced Features - Sharing & Permissions

**What to do:**
- [ ] Sharing API endpoints
- [ ] Permission system
- [ ] Role-based access control
- [ ] Sharing UI

**Files to Create:**
- `server/routes/sharing.js`
- `server/controllers/sharingController.js`
- `client/src/pages/Sharing.js`

**Commit Command:**
```bash
git add server/routes/sharing.js server/controllers/sharingController.js client/src/pages/Sharing.js
git commit -m "Day 10: Add document sharing and permission management features"
git push origin main
```

---

## Day 11: Testing & Bug Fixes

**What to do:**
- [ ] Write unit tests
- [ ] Integration tests
- [ ] Bug fixes
- [ ] Performance optimization

**Files to Create:**
- `server/tests/auth.test.js`
- `server/tests/documents.test.js`
- `client/src/__tests__/components.test.js`

**Commit Command:**
```bash
git add server/tests/ client/src/__tests__/
git commit -m "Day 11: Add unit and integration tests with bug fixes and optimizations"
git push origin main
```

---

## Day 12: Documentation & Deployment Preparation

**What to do:**
- [ ] Create API documentation
- [ ] Update README
- [ ] Create deployment guide
- [ ] Setup production environment

**Files to Create:**
- `API_DOCS.md`
- `DEPLOYMENT.md`
- Update `README.md`

**Commit Command:**
```bash
git add API_DOCS.md DEPLOYMENT.md README.md
git commit -m "Day 12: Add comprehensive documentation and deployment configuration"
git push origin main
```

---

## 📋 Quick Reference - Daily Workflow

1. **Make your changes** for the day
2. **Stage changes:** `git add -A` or `git add <specific-files>`
3. **Commit:** Use the commit message from the task
4. **Push:** `git push origin main`
5. **Update PROGRESS.md:** Mark the day as complete
6. **Next day:** Repeat!

## 🚀 Setup First Time Only

```bash
# Clone the repo
git clone https://github.com/AniketMdl/DocuFlow.git
cd DocuFlow

# Setup backend
cd server
npm install
# Copy .env.example to .env and add your MongoDB URI
cp .env.example .env

# Setup frontend (from root)
cd ../client
npm install
```

## 🎯 Daily Workflow

```bash
# Day 1 (Already done!)
git add -A
git commit -m "Day 1: Setup MERN folder structure with backend and frontend configuration"
git push origin main

# Day 2
# Make your changes...
git add -A
git commit -m "Day 2: Configure Express server and MongoDB connection"
git push origin main

# Continue for Days 3-12...
```

---

**Happy Coding! You've got this! 🚀**

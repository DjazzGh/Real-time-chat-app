# ✨ TalkFlow — Full Stack Real-time Chat App ✨

A modern, full-stack real-time chat application with authentication, online status, image sharing, and a beautiful, themeable UI.
**LiveSite:** https://real-time-chat-app-angr.onrender.com

## 🚀 Tech Stack

**Frontend:**
- React (with Vite)
- Zustand (state management)
- TailwindCSS & DaisyUI (UI & themes)
- React Router
- Socket.io-client (real-time)
- Axios (API requests)
- Lucide React (icons)
- React Hot Toast (notifications)

**Backend:**
- Node.js & Express
- MongoDB (Mongoose ODM)
- Socket.io (real-time)
- JWT (authentication)
- Cloudinary (image uploads)
- bcryptjs (password hashing)
- dotenv, cookie-parser, cors

**Dev Tools:**
- Nodemon, ESLint, PostCSS, Vite

---

## ✨ Features
- User registration, login, and JWT-based authentication
- Real-time messaging (text & images) with Socket.io
- Online user status indicator
- Profile management (avatar upload via Cloudinary)
- Responsive, themeable UI (multiple themes via DaisyUI)
- Error handling on both client and server
- Global state management with Zustand

---

## 📁 Project Structure
- `backend/` — Express server, API routes, Socket.io, MongoDB models, authentication, and messaging logic
- `frontend/` — React app, UI components, pages, Zustand stores, theming, and API integration

---

## 🛠️ Getting Started

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd Real-time-chat-app
```

### 2. Backend Setup
```bash
cd backend
npm install
# Create a .env file with your MongoDB URI, JWT secret, Cloudinary keys, etc.
npm run dev
```

### 3. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

### 4. Open the app
Visit [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📚 API Endpoints (Backend)
- `POST   /api/auth/signup` — Register
- `POST   /api/auth/login` — Login
- `POST   /api/auth/logout` — Logout
- `PUT    /api/auth/update-profile` — Update profile (protected)
- `GET    /api/auth/check` — Check auth status (protected)
- `GET    /api/messages/users` — Get user list (protected)
- `GET    /api/messages/:id` — Get messages with a user (protected)
- `POST   /api/messages/send/:id` — Send message (protected)

---

## 🎨 Customization
- Easily switch UI themes in the settings page
- Extend with more features or integrations as needed



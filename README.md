🚀 Express Session Authentication Boilerplate (Production Ready)

A production-grade Express.js authentication boilerplate using MongoDB + Sessions, designed for developers who want a secure, scalable, and clean backend foundation without unnecessary complexity.

This setup follows real-world backend practices (MVC, session store, secure cookies) and is suitable for admin panels, dashboards, and traditional web apps.

✨ Features

✅ Express.js with ES Modules (type: module)

✅ MongoDB + Mongoose

✅ Session-based authentication

✅ MongoDB session store (connect-mongo)

✅ Secure HTTP-only cookies

✅ MVC architecture

✅ Auth middleware for protected routes

✅ Production-ready session configuration

🧱 Tech Stack

Node.js

Express

MongoDB

Mongoose

express-session

connect-mongo

bcrypt

dotenv

📁 Project Structure
server/
│
├── app.js
├── config/
│ └── db.js
│
├── models/
│ └── User.js
│
├── controllers/
│ └── authController.js
│
├── routes/
│ ├── authRoutes.js
│ └── userRoutes.js
│
├── middleware/
│ └── auth.middleware.js
│
├── .env
├── package.json
└── README.md

⚙️ Environment Variables

Create a .env file in the root directory.

🔐 Notes on ENV Variables

PORT – Server port

MONGO_URI – MongoDB connection string

NODE_ENV – Use production in live environments

SESSION_SECRET – Used to sign session cookies (must be strong & private)

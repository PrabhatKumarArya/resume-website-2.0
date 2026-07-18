# 🚀 Portfolio Backend API

A secure and scalable **Express.js REST API** built for the **Portfolio Website**. It manages contact form submissions, admin authentication, email notifications, and dashboard operations using MongoDB Atlas and JWT Authentication.

---

# 🌐 Live API

**Backend:** *(Add your Render URL after deployment)*

Example:

```
https://portfolio-backend.onrender.com
```

---

# ✨ Features

## REST API

- RESTful API Architecture
- Contact Form API
- Secure Admin Authentication
- JWT Token Generation
- Protected Admin Routes
- CRUD Operations
- Message Status Management
- Input Validation
- Global Error Handling

---

## Contact System

- Save contact messages
- Store messages in MongoDB Atlas
- Send notification email to admin
- Send automatic reply email to visitors
- Resume attachment support
- Message validation

---

## Admin Dashboard Support

- Admin Login
- JWT Authentication
- View Messages
- Delete Messages
- Mark Messages as Read
- Dashboard Statistics Support

---

# 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- Nodemailer
- dotenv
- Express Validator

---

# 🏗 Backend Architecture

```text
            React Frontend
                   │
              Axios Requests
                   │
                   ▼
          Express.js REST API
                   │
        ┌────────────────────┐
        │    MongoDB Atlas   │
        └────────────────────┘
                   │
             Contact Messages
                   │
                   ▼
              Nodemailer
         ┌─────────┴─────────┐
         ▼                   ▼
  Admin Notification     Auto Reply Email
```

---

# 📁 Project Structure

```text
backend/
│
├── config/
│   ├── db.js
│   └── mail.js
│
├── controllers/
│   ├── authController.js
│   └── contactController.js
│
├── middleware/
│   ├── asyncHandler.js
│   ├── authMiddleware.js
│   ├── errorHandler.js
│   ├── validateContact.js
│   └── validateRequest.js
│
├── models/
│   ├── Admin.js
│   └── Contact.js
│
├── routes/
│   ├── authRoutes.js
│   └── contactRoutes.js
│
├── scripts/
│   └── createAdmin.js
│
├── utils/
│   └── generateToken.js
│
├── app.js
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

# 📂 Folder Description

| Folder | Purpose |
|---------|----------|
| `config/` | Database & Mail Configuration |
| `controllers/` | Business Logic |
| `middleware/` | Authentication, Validation & Error Handling |
| `models/` | MongoDB Schemas |
| `routes/` | API Endpoints |
| `scripts/` | Utility Scripts |
| `utils/` | Helper Functions |

---

# 📡 API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/contact` | Submit Contact Form |
| GET | `/api/contact` | Get All Messages |
| DELETE | `/api/contact/:id` | Delete Message |
| PATCH | `/api/contact/:id/read` | Mark Message as Read |
| POST | `/api/admin/login` | Admin Login |

---

# 📨 Sample API Response

```json
{
  "success": true,
  "message": "Message sent successfully.",
  "data": {
    "_id": "6853af1a1cbb0d2d52",
    "name": "Prabhat Kumar Arya",
    "email": "example@gmail.com",
    "subject": "Internship",
    "message": "Hello!",
    "status": "new"
  }
}
```

---

# ⚙ Prerequisites

Before running this project, ensure you have:

- Node.js (v18 or above)
- npm
- MongoDB Atlas Account
- Gmail Account
- Gmail App Password

---

# ⚙ Installation

## Clone Repository

```bash
git clone https://github.com/PrabhatKumarArya/resume-website-2.0.git
```

```bash
cd resume-website-2.0/backend
```

---

## Install Dependencies

```bash
npm install
```

---

# 🔑 Environment Variables

Create a `.env` file inside the backend directory.

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

EMAIL_USER=prabhatkumararya9@gmail.com
EMAIL_PASS=********

JWT_SECRET=***********
JWT_EXPIRE=7d
```

---

# ▶ Available Scripts

### Start Development Server

```bash
npm run dev
```

Runs the backend in development mode.

---

### Start Production Server

```bash
npm start
```

Runs the production server.

---

# 🔒 Security

- JWT Authentication
- Password Hashing using bcryptjs
- Protected Routes
- Environment Variables
- Express Validator
- Centralized Error Handling

---

# 🌍 Deployment

### Backend

- Render

### Database

- MongoDB Atlas

### Email Service

- Gmail SMTP using Nodemailer

---

# 📸 API Testing

You can test the API using:

- Postman
- Thunder Client
- Insomnia

---

# 🚀 Future Improvements

- Refresh Tokens
- Rate Limiting
- API Versioning
- Swagger API Documentation
- Docker Support
- Redis Caching
- Unit Testing
- Role-Based Authentication

---

# 🤝 Contributing

Contributions, issues, and feature requests are welcome.

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push the branch
5. Open a Pull Request

---

# 👨‍💻 Author

**Prabhat Kumar Arya**

📧 Email: prabhatkumararya9@gmail.com

💼 LinkedIn: https://linkedin.com/in/prabhat-kumar-arya-883a79324

💻 GitHub: https://github.com/PrabhatKumarArya

---

# 📄 License

This project is licensed under the **MIT License**.

---

## ⭐ Show Your Support

If you found this project useful, consider giving it a ⭐ on GitHub. It helps others discover the project and motivates future improvements.
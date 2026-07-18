# 📁 Project Structure

```text
resume-website-2.0/
│
├── README.md
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── admin/
│   │   ├── api/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── layouts/
│   │   ├── pages/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── styles/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── .gitignore
│   ├── package.json
│   ├── vite.config.js
│   ├── eslint.config.js
│   └── README.md
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── public/
│   ├── app.js
│   ├── server.js
│   ├── package.json
│   ├── .gitignore
│   └── README.md
│
└── .gitignore
```
---

# 📚 Documentation

- 📄 [Frontend Documentation](./frontend/README.md)
- 📄 [Backend Documentation](./backend/README.md)

---

# 🏗 Architecture

```text
Visitor
   │
   ▼
React + Vite Frontend
   │
Axios API
   │
   ▼
Express.js Backend
   │
 ┌───────────────┐
 │ MongoDB Atlas │
 └───────────────┘
   │
   ▼
Nodemailer
   │
   ▼
Admin Email + Auto Reply
```

---

# 🔗 API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/contact` | Send contact message |
| GET | `/api/contact` | Get all messages (Admin) |
| PATCH | `/api/contact/:id/read` | Mark message as read |
| DELETE | `/api/contact/:id` | Delete message |
| POST | `/api/auth/login` | Admin login |

---

# 📦 Prerequisites

- Node.js 18+
- npm
- MongoDB Atlas
- Gmail App Password
- Git

---
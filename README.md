# ✅ ToDo List Web App

A fullstack ToDo list application built with:

- 💻 **Frontend**: HTML, CSS, Vanilla JavaScript
- 🛠 **Backend**: Node.js, Express
- 🗄 **Database**: MongoDB (via MongoDB Compass for local development)

---

## 🔧 Features

- Add new tasks
- Edit existing tasks
- Mark tasks as completed/uncompleted
- Delete tasks
- Persist data with MongoDB
- Responsive and clean UI

---

## 🗂 Project Structure

todo-app/
├── backend/ # Express + MongoDB API
│ ├── models/
│ │ └── Todo.js
│ ├── routes/
│ │ └── todos.js
│ ├── server.js
│ └── .gitignore
│
├── frontend/ # Static HTML/CSS/JS frontend
│ ├── index.html
│ ├── script.js
│ └── style.css
│
└── README.md


---

## ⚙️ Setup Instructions

### 📦 1. Backend Setup

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/todolist-backend.git
cd todolist-backend

2. Install Dependencies
bash
Copy
Edit
npm install
3. Create Environment Variables
Create a .env file in the root directory and add the following:

env
Copy
Edit
MONGO_URI=mongodb://localhost:27017/todolist
PORT=3000
📌 You can also use a MongoDB Atlas URI in place of the local URI.

4. Start the Server
bash
Copy
Edit
node server.js

📝 License
MIT License — free to use, share, and modify.


# 📝 Blog App – Frontend (React + Vite)

## 🚀 Overview

This is the frontend of a full-stack MERN Blog Application.
It is built using **React (Vite)** and styled with **Tailwind CSS**, and it communicates with a Node.js backend via REST APIs.

## ✨ Features

* 📄 View all blog posts
* ➕ Create new posts
* 🗑 Delete posts
* 🔄 Real-time UI updates
* ⚠️ Error handling (backend offline detection)
* ⏳ Loading states for better UX
* 🔔 Toast notifications (react-hot-toast)
* 🎨 Clean and modern UI using Tailwind CSS

## 🧑‍💻 Tech Stack

* ⚛️ React (Vite)
* 🎨 Tailwind CSS
* 🔥 React Hot Toast
* 🌐 Fetch API

## 📁 Project Structure

```
src/
├── pages/
│   └── BlogHome.jsx
├── App.jsx
├── main.jsx
```

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/blog-frontend.git
cd blog-frontend
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run the development server

```bash
npm run dev
```

## 🔗 Backend Connection

Make sure your backend is running on:

```
http://localhost:5000
```

Or update the API URL in the code:

```js
fetch("https://your-backend.onrender.com/posts")
```

## 🎥 Demo Features

* Create a blog post
* Delete a post
* Data persists after refresh (MongoDB)
* Error handling when backend is offline
* Input validation for empty fields

## 🧠 Key Concepts Implemented

* React Hooks (`useState`, `useEffect`)
* API Integration (GET, POST, DELETE)
* Conditional Rendering
* UX Handling (loading, error, empty state)
* Component-based architecture

## 📌 Notes

* Empty state is shown only after data is fetched
* Error state is handled separately for better UX
* Toast notifications improve user feedback

## 📬 Future Improvements

* ✏️ Edit/Update post feature
* 🖼 Image upload support
* 🔍 Search functionality
* 📱 Responsive enhancements

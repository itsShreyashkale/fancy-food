# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



# 🍔 FancyFood — MERN Food Ordering App

FancyFood is a full-stack food ordering web application built using the MERN stack.  
It allows users to browse food items, add them to cart, place orders, and track their orders — all with a modern UI and secure authentication.

---

## ✨ Features

- User Authentication (JWT)
- Add to Cart & Cart Persistence
- Secure Checkout Flow
- Order Placement & Order History
- Protected Routes
- Responsive & Modern UI
- Smooth Animations with Framer Motion

---

## 🛠 Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- Framer Motion
- React Router
- Context API

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication

---

## 🔐 Authentication

- JWT-based authentication
- Protected routes on frontend & backend
- Persistent login using localStorage

---

## 🚀 Getting Started

### Frontend
```bash
npm install
npm run dev

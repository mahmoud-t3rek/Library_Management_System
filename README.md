# Library System API

A backend API for managing a **library system**, built with **Express**, **Mongoose**, **Joi**, **Multer**, **bcrypt**, **Resend** (for email notifications), and rate limiting.  
Includes **error handling**, **secure validation**, and **role-based access control** for admins and users.

---

## 📌 Features
- **User authentication** (register, login) with **hashed passwords**.
- **Role-based access** (Admin / User).
- Manage **books** (add, update, delete, list).
- Borrow and return books with transaction tracking.
- **File uploads** for book cover images (via Multer).
- **Email notifications** using Resend API.
- Input validation with Joi.
- Centralized **error handling**.
- **Rate limiting** to prevent abuse.

---

## 🛠 Technologies Used
- **Node.js / Express**
- **MongoDB / Mongoose**
- **Joi** (validation)
- **Multer** (file uploads)
- **bcrypt** (password hashing)
- **Express Rate Limit**
- **Resend** (email sending)

---

## 📥 Installation

```bash
git clone https://github.com/USERNAME/LibrarySystem.git
cd LibrarySystem
npm install

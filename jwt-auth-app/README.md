# 🔐 JWT Authentication App (React)

A modern and responsive JWT Authentication App built using React.
This project demonstrates how login systems work using JSON Web Tokens (JWT), Context API, and localStorage.

---

## 🚀 Features

* 🔑 User Login System
* 🔐 JWT Token Handling
* 💾 Token Storage in localStorage
* 👤 User Dashboard with Details
* 🚪 Logout Functionality
* ⚠️ Error Handling
* 🎨 Premium Glassmorphism UI
* 📱 Fully Responsive Design

---

## 🧠 Concepts Used

* React Functional Components
* React Hooks (useState, useEffect, useContext)
* Context API for global state management
* API handling (simulated using Axios structure)
* LocalStorage for authentication persistence

---

## 🏗️ Project Structure

src/
│
├── components/
├── context/
│   └── AuthContext.js
├── pages/
│   ├── Login.js
│   └── Dashboard.js
├── utils/
│   └── Api.js
├── App.js
├── index.js
└── index.css

---

## 🔐 Authentication Flow

1. User enters email and password
2. Data is sent to simulated API
3. API validates credentials
4. If valid:

   * JWT token is generated
   * User data is returned
5. Token is stored in localStorage
6. User is redirected to Dashboard

---

## 🔑 Demo Credentials

Use these credentials to login:

Email: [noor@gmail.com](mailto:noor@gmail.com)
Password: 123456

---

## 🖥️ Dashboard Features

* Displays user name, email, and ID
* Shows account overview (status, role, etc.)
* Dynamic avatar with user initials
* Session information

---

## 🚪 Logout

* Clears token from localStorage
* Resets user state
* Redirects back to login page

---

## 🛡️ Protected Logic

* Dashboard is only visible when user is logged in
* If not authenticated, login page is shown

---

## 🎨 UI Design

* Dark theme with glassmorphism effect
* Smooth animations and shadows
* Clean and modern layout
* Mobile-friendly responsive design

---

## 🛠️ Technologies Used

* React JS
* Context API
* Axios (for API structure)
* LocalStorage
* CSS (Custom Styling)

---

## 📈 Future Improvements

* Add real backend (Node.js / Express)
* Implement signup/register system
* Add token expiration handling
* Use React Router with Protected Routes
* Improve security (httpOnly cookies)

---

## 📌 Conclusion

This project simulates a real-world authentication system using JWT.
It helps in understanding how login, token storage, and protected access work in modern web applications.

---

## 👨‍💻 Author

Noor Ullah

---

## ⭐ If you like this project

Give it a star ⭐ on GitHub and share with others!

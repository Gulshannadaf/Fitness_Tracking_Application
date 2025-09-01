
<!-- Header Section -->
<div align="center">
  <img src="https://img.icons8.com/fluency/96/dumbbell.png" width="80" alt="Fitness Icon"/>
  <h1>🏋️‍♀️ Fitness Tracker</h1>
  <p><b>MERN Stack | JWT Authentication | Redux Toolkit | Responsive UI</b></p>

  <p>
    <img src="https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react" />
    <img src="https://img.shields.io/badge/Redux_Toolkit-2.2.3-purple?style=for-the-badge&logo=redux" />
    <img src="https://img.shields.io/badge/Node.js-18.16.0-green?style=for-the-badge&logo=node.js" />
    <img src="https://img.shields.io/badge/Express.js-4.18.2-black?style=for-the-badge&logo=express" />
    <img src="https://img.shields.io/badge/MongoDB-6.0.5-darkgreen?style=for-the-badge&logo=mongodb" />
    <img src="https://img.shields.io/badge/JWT-Secured-orange?style=for-the-badge&logo=jsonwebtokens" />
  </p>

  <p>
    <a href="#🚀-features">Features</a> •
    <a href="#🛠️-tech-stack">Tech Stack</a> •
    <a href="#⚡-getting-started">Getting Started</a> •
    <a href="#📸-screenshots">Screenshots</a> •
    <a href="#🔮-future-enhancements">Future Plans</a>
  </p>
</div>

---

## 🚀 Features

✅ **JWT Authentication** — Secure login & signup  
✅ **Workout Management** — Add, edit, and delete workouts  
✅ **Redux Toolkit** — Simplified state management  
✅ **Dashboard** — View fitness progress in real-time  
✅ **Dark & Light Theme** — Using `ThemeContext`  
✅ **Responsive UI** — Works perfectly on mobile, tablet, and desktop  
✅ **API Integration** — Centralized API handling in `src/api`  

---

## 🛠️ Tech Stack

| Category      | Technologies Used |
|-------------|--------------------|
**Frontend**  | React, Redux Toolkit, Context API, CSS3 |
**Backend**   | Node.js, Express.js |
**Database**  | MongoDB (Mongoose) |
**Auth**      | JWT & bcrypt |
**State Mgmt**| Redux Toolkit |
**API Testing**| Postman |
**Version Control**| Git, GitHub |

---

## 🧩 Project Workflow

```mermaid
flowchart TD
    A[User Registers / Logs In] -->|JWT Auth| B[Authentication API]
    B --> C[Dashboard]
    C --> D[Add Workouts]
    C --> E[Track Progress]
    D --> F[MongoDB Stores Workout Data]
    E --> G[Display Analytics in UI]
````

---

## 📂 Project Structure

```
FITNESS_TRACKER/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── api/               # API calls
│   │   ├── components/        # Reusable components
│   │   ├── pages/             # App pages
│   │   │   ├── Authentication.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   └── Workouts.jsx
│   │   ├── redux/             # State management
│   │   │   ├── reducers/
│   │   │   │   └── userSlice.js
│   │   │   └── store.js
│   │   ├── utils/             # Utility files & images
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   ├── package.json
└── README.md
```

---

## ⚡ Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/fitness-tracker.git
cd fitness-tracker/client
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Setup environment variables

Create a `.env` file inside the `client` folder:

```
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
PORT=5000
```

### 4️⃣ Run the app

```bash
npm start
```

The app will run at **[http://localhost:3000](http://localhost:3000)**.

---



## 🔮 Future Enhancements

🔹 AI-powered **personalized workout recommendations**
🔹 Integration with **wearable devices**
🔹 **Social sharing** — Connect & compete with friends
🔹 **Progress analytics dashboard**

---



## 🌟 Show Your Support

If you like this project, **give it a ⭐ on GitHub** to motivate future development!



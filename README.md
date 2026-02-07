# 🎮 Multiplayer Quiz Game API

A backend system for a real-time multiplayer quiz game built using **Node.js**, **Express**, and **MongoDB Atlas**.

This API allows two players to join a quiz session, answer questions, and determine a winner based on scoring and submission time.

---

## 🚀 Features

✅ Player matchmaking  
✅ Random quiz question generation  
✅ Same question order for both players  
✅ Answer submission validation  
✅ Score calculation  
✅ Winner determination  
✅ Tie-breaker using submission time  
✅ Duplicate answer prevention  
✅ Cloud database using MongoDB Atlas  

---

## 🏗️ Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Postman (API Testing)

---

## 📂 Project Structure

```
src/
 ├── config/
 ├── controllers/
 ├── models/
 ├── routes/
 ├── utils/
 └── app.js
server.js
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

git clone <your-repo-url>

cd game-quiz-api


---

### 2️⃣ Install Dependencies

npm install


---

### 3️⃣ Setup Environment Variables

Create `.env` file:

PORT=5000

MONGO_URI=your_mongodb_connection_string


---

### 4️⃣ Run Server

npm run dev


Server runs on: http://localhost:5000


---

## 📌 API Endpoints

### 🎯 Player Matchmaking
POST `/api/matchmaking`

Creates or matches players into a quiz session.

---

### 🎯 Send Quiz Questions
POST `/api/quiz/start`

Generates quiz session and assigns questions.

---

### 🎯 Submit Answers
POST `/api/quiz/submit`

Submit answers for player.

---

### 🎯 Get Result
GET `/api/quiz/result/:sessionId`

Returns final scores and winner.

---

## 🧠 Winner Logic

Winner is decided based on:

1️⃣ Highest correct answers  
2️⃣ If equal → Player who submitted answers first  
3️⃣ If both equal → Draw  

---

## 🛡️ Validations Implemented

- Duplicate answer submission blocked  
- Both players must submit answers before result  
- Invalid player protection  

---

## 📮 Postman Collection

(Attach your Postman collection JSON here)

---

## 🌐 Deployment

(If deployed, add link here)

---



## 👨‍💻 Author

Preetham Poojari  
Full Stack Developer (MERN / Next.js)


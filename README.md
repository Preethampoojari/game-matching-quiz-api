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

git clone https://github.com/Preethampoojari/game-matching-quiz-api.git

cd game-matching-quiz-api


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

You can test all APIs using the Postman collection below:

👉 [Download Postman Collection](./game-quiz-api.postman_collection.json)

### How to Use
1. Import this JSON file into Postman
2. Run APIs in the following order:

   - Player Matchmaking
   - Start Quiz Session
   - Submit Player Answers
   - Get Result

---

## 🧪 API Testing Flow

Follow this order while testing APIs:

1️⃣ POST /api/matchmaking → Player 1  
2️⃣ POST /api/matchmaking → Player 2  
3️⃣ POST /api/quiz/start  
4️⃣ POST /api/quiz/submit → Player 1  
5️⃣ POST /api/quiz/submit → Player 2  
6️⃣ GET /api/quiz/result/:sessionId


---


## 🌐 Deployment

Backend deployed using **Render**

Live API:
👉 https://game-matching-quiz-api.onrender.com

Note:
Free Render instance may take 30-50 seconds to wake up after inactivity.

---


## 🧪 API Testing Proof (Postman)

🎯 Player Matchmaking — Player 1 (Waiting State)

![Player 1 Waiting](docs/images/Player-1-Matchmaking-waiting.png)


🎯 Player Matchmaking — Player 2 (Match Found)

![Player 2 Match Found](docs/images/Player-2-Matchmaking-match-found.png)

🎯 Sending Quiz Questions to Players

![Player 2 Match Found](docs/images/Sending-10-Questions-to-Both-Player.png)

🎯 Player 1 Answer Submission

![Player 2 Match Found](docs/images/Player-1-Answer-Submitted.png)


🎯 Player 2 Answer Submission

![Player 2 Match Found](docs/images/Player-2-Answer-Submitted.png)

🚫 Duplicate Submission Prevention

![Player 2 Match Found](docs/images/Prevent-Duplicate-Submission.png)

🏆 Winner Determination

![Player 1 Waiting](docs/images/Get-Winner.png)



---



## 👨‍💻 Author

Preetham Poojari  
Full Stack Developer (MERN / Next.js)


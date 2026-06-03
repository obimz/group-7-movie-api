# 🎬 Group 7 — Movie Recommendation API

A RESTful API built with **Node.js** and **Express.js** for managing a movie collection. Supports full CRUD operations including adding, viewing, updating, and deleting movie records.

> Built as part of the BeTechified Backend Development Program.

---

## 🛠 Tech Stack
- **Node.js** — Runtime environment
- **Express.js** — Web framework
- **dotenv** — Environment variables
- **Postman** — API testing

---

## 📁 Project Structure

```
group-7-movie-api/
├── src/
│   ├── data/
│   │   └── movies.js        ← in-memory movie data
│   ├── middleware/
│   │   └── logger.js        ← custom request logger
│   ├── routes/
│   │   └── moviesRoutes.js  ← CRUD route handlers
│   ├── app.js               ← Express app setup
│   └── server.js            ← server entry point
├── .env
├── .gitignore
├── package.json
└── README.md
```

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/obimz/group-7-movie-api.git

# Install dependencies
npm install

# Create your .env file and set PORT
PORT=3000

# Start the server
npm run dev
```

---

## 📡 API Endpoints

Base URL: `http://localhost:3000/api/movies`

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/movies` | Get all movies |
| GET | `/api/movies/:id` | Get a single movie |
| POST | `/api/movies` | Add a new movie |
| PATCH | `/api/movies/:id` | Update specific fields |
| PUT | `/api/movies/:id` | Replace entire movie record |
| DELETE | `/api/movies/:id` | Delete a movie |

### Movie Object
```json
{
    "id": 1,
    "title": "Inception",
    "genre": "Sci-Fi",
    "releaseYear": 2010,
    "rating": 8.8
}
```

---

## 👥 Contributors


---

> Built with ❤️ by Group 7 — BeTechified Backend Development Program
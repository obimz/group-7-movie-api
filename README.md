# Movie Recommendation API

A robust RESTful API built with **Node.js** and **Express.js** to manage a movie collection, supporting full CRUD operations, input validation, custom logging, and comprehensive automated test suites. 

Developed by **Group 7** for the **BeTechified Capstone Project**.

---

## 🚀 Key Features

* **Create**: Add new movie records with auto-generated unique IDs, strict validation, and duplicate prevention.
* **Read**: Retrieve all movies or search with dynamic filter queries (`genre`) and sort mechanisms (`releaseYear` or `rating`).
* **Update**: Modify entire movie records (`PUT`) or update rating parameters individually (`PATCH`).
* **Delete**: Securely remove movie listings by ID with state verification.
* **Security & Clean Code**: Pre-configured HTTP response headers (using `helmet`), safe CORS mapping, strict inputs validation/sanitization, and central error management.
* **Automated Tests**: Unit and integration test suites using `jest` and `supertest`.

---

## 🛠️ Tech Stack

* **Runtime**: [Node.js](https://nodejs.org/) (v16+)
* **Framework**: [Express.js](https://expressjs.com/) (v5+)
* **Security**: [Helmet](https://helmetjs.github.io/) & [CORS](https://github.com/expressjs/cors)
* **Validation**: [express-validator](https://express-validator.github.io/)
* **Testing**: [Jest](https://jestjs.io/) & [Supertest](https://github.com/ladjs/supertest)
* **Code Style**: [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/)

---

## 📁 Project Structure

```text
group-7-movie-api/
├── .env.example              # Environment variables template
├── .env                      # Local environment file (ignored by Git)
├── eslint.config.js          # ESLint rules configuration
├── .prettierrc               # Prettier formatting configuration
├── package.json              # Project scripts and dependencies
├── src/
│   ├── app.js                # Express app setup and middleware registration
│   ├── server.js             # App entry point (binds server port)
│   ├── config/
│   │   └── index.js          # Centralized configuration loader
│   ├── data/
│   │   └── moviesData.js     # In-memory movie database model
│   ├── middleware/
│   │   ├── errorHandler.js   # Centralized error handler
│   │   ├── logger.js         # HTTP request logger
│   │   └── validator.js      # Input validation schemas
│   ├── controllers/
│   │   └── moviesController.js # API Controller actions (CRUD logic)
│   └── routes/
│       └── moviesRoutes.js   # API Endpoint routes
└── tests/
    └── movies.test.js        # Automated API test suite
```

---

## ⚙️ Environment Configuration

Before running the application, set up your local environment file:

1. Copy the template:
   ```bash
   cp .env.example .env
   ```
2. Open `.env` and adjust the variables if necessary:
   ```ini
   PORT=3000
   NODE_ENV=development
   ```

---

## 🏃 Getting Started

### 1. Installation
Clone your personal fork repository and install the dependencies:
```bash
git clone https://github.com/chijindunwokeohuru/group-7-movie-api.git
cd group-7-movie-api
npm install
```

### 2. Running the Server

* **Development Mode** (with hot-reload via `nodemon`):
  ```bash
  npm run dev
  ```
  The server will start listening at `http://127.0.0.1:3000`.

* **Production Mode**:
  ```bash
  npm start
  ```

---

## 🧪 Testing, Linting & Formatting

* **Run Automated Tests**:
  Runs the integration suite using Jest and Supertest.
  ```bash
  npm test
  ```
* **Lint Code**:
  Checks the source code for styling and syntax violations.
  ```bash
  npm run lint
  ```
* **Auto-format Code**:
  Formats files using Prettier formatting rules.
  ```bash
  npm run format
  ```

---

## 📡 API Reference Documentation

All endpoints return JSON responses.

### 1. Retrieve Movies
* **Endpoint**: `GET /movies`
* **Query Parameters** (Optional):
  * `genre` (string): Filter by genre (case-insensitive).
  * `sortBy` (string): Sort list by `'year'` or `'rating'`.
* **Success Response** (`200 OK`):
  ```json
  [
    {
      "id": 1,
      "title": "Inception",
      "genre": "Sci-Fi",
      "releaseYear": 2010,
      "rating": 8.8
    }
  ]
  ```

### 2. Retrieve Movie by ID
* **Endpoint**: `GET /movies/:id`
* **Success Response** (`200 OK`):
  ```json
  {
    "id": 1,
    "title": "Inception",
    "genre": "Sci-Fi",
    "releaseYear": 2010,
    "rating": 8.8
  }
  ```
* **Error Response** (`404 Not Found`):
  ```json
  {
    "message": "Movie with ID 1 not found"
  }
  ```

### 3. Create a Movie
* **Endpoint**: `POST /movies`
* **Request Body**:
  ```json
  {
    "title": "Interstellar",
    "genre": "Sci-Fi",
    "releaseYear": 2014,
    "rating": 8.6
  }
  ```
* **Success Response** (`201 Created`): Returns the created movie with its generated `id`.
* **Error Response** (`400 Bad Request`): Title duplicate or validation/type checks failed.

### 4. Update Entire Movie
* **Endpoint**: `PUT /movies/:id`
* **Request Body**: All movie fields are required.
  ```json
  {
    "title": "Inception (Updated)",
    "genre": "Sci-Fi",
    "releaseYear": 2010,
    "rating": 9.0
  }
  ```
* **Success Response** (`200 OK`): Returns the fully updated movie object.

### 5. Update Rating Only
* **Endpoint**: `PATCH /movies/:id/rating`
* **Request Body**:
  ```json
  {
    "rating": 9.2
  }
  ```
* **Success Response** (`200 OK`): Returns the updated movie object.

### 6. Delete Movie
* **Endpoint**: `DELETE /movies/:id`
* **Success Response** (`200 OK`):
  ```json
  {
    "message": "Movie deleted successfully",
    "movie": { "id": 1, "title": "Inception", ... }
  }
  ```

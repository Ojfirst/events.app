# F-Router: React + Vite Events App

## Overview
F-Router is a full-stack event management application built with React, Vite, and Express. It allows users to browse, create, edit, and delete events, and sign up for a newsletter. The backend provides RESTful APIs with validation and error handling.

## Features
- List all events
- View event details
- Create new events
- Edit events
- Delete events
- Newsletter signup
- Server-side validation
- Error and loading states

## Getting Started

### Prerequisites
- Node.js (v18 or newer)

### Installation
1. Clone the repository
2. Install dependencies for both frontend and backend:
   ```sh
   cd FRONTEND
   npm install
   cd ../BACKEND
   npm install
   ```

### Running the App
1. Start the backend server:
   ```sh
   node app.js
   ```
2. Start the frontend dev server:
   ```sh
   cd ../FRONTEND
   npm run dev
   ```
3. Open your browser at `http://localhost:5173`

## Folder Structure
```
BACKEND/
  app.js
  events.json
  routes/
  data/
  util/
FRONTEND/
  src/
    components/
    routes/
    loader-action/
  public/
  index.html
  package.json
```

## API Endpoints
- `GET /events` - List all events
- `GET /events/:id` - Get event details
- `POST /events` - Create event
- `PATCH /events/:id` - Edit event
- `DELETE /events/:id` - Delete event

## License
MIT

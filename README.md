# YLProject

YLProject is a full-stack web application that includes both a frontend and a backend. The project is designed for seamless user interaction and efficient data management.

## Tech Stack

### Frontend:
- React.js (with Vite or Create React App)
- CSS (or any preferred styling library)
- Hosted on Vercel

### Backend:
- Node.js with Express.js
- MongoDB (for database management)
- JWT Authentication
- Hosted on Render

## Features
- User Authentication (Sign Up / Login)
- API integration for dynamic content
- Role-based access control (Admin, Vendor, Customer)
- Booking and management system
- Responsive design

## Setup Instructions

### 1️⃣ Clone the Repository
```sh
 git clone https://github.com/SamarWats/YLProject.git
 cd YLProject
```

### 2️⃣ Backend Setup
```sh
cd backend
npm install
```
Create a `.env` file in the backend directory and add:
```env
PORT=5000
REACT_APP_BACKEND_URL=http://localhost:5000
```
Run the backend:
```sh
npm start
```

### 3️⃣ Frontend Setup
```sh
cd frontend
npm install
```
Create a `.env` file in the frontend directory and add:
```env
REACT_APP_BACKEND_URL=https://your-backend.onrender.com
```
Run the frontend:
```sh
npm start
```

## Deployment
### Backend Deployment on Render
1. Push backend code to GitHub
2. Create a new **Web Service** on [Render](https://render.com)
3. Set build command: `npm install`
4. Set start command: `npm start`
5. Add environment variables
6. Deploy and get your backend URL

### Frontend Deployment on Vercel
1. Push frontend code to GitHub
2. Create a new **Project** on [Vercel](https://vercel.com)
3. Connect your GitHub repo
4. Set environment variable `REACT_APP_BACKEND_URL`
5. Deploy


College Administration System
Table of Contents
About
Features
Tech Stack
Setup
Usage
API Endpoints
Screenshots
Contributing
License
About
The College Administration System is a web application designed to manage student applications and administrative tasks. The system has two roles: User and Admin. Users can apply for bonafide certificates, scholarships, and travel concessions. Admins have special privileges to perform CRUD operations on users and applications.

Features
User
Apply for Bonafide Certificates
Apply for Scholarships
Apply for Travel Concessions
Admin
Manage Users (Create, Read, Update, Delete)
Manage Applications (Approve, Reject, View Details)
Tech Stack
Frontend: React
Backend: Node.js, Express
Database: MongoDB
Others: Axios, React Router, Mongoose, Cors, Body-Parser
Setup
Prerequisites
Node.js and npm installed
MongoDB instance running
Installation
Clone the repository

bash
Copy code
git clone https://github.com/your-username/college-admin.git
cd college-admin
Install dependencies for frontend and backend

bash
Copy code
cd frontend
npm install
cd ../backend
npm install
Set up environment variables

Create a .env file in the backend directory and add the following:

env
Copy code
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
Run the application

Start the backend server:

bash
Copy code
cd backend
npm start
Start the frontend server:

bash
Copy code
cd frontend
npm start
Usage
User
Register and login to the system.
Navigate to the application forms (Bonafide, Scholarship, Concession).
Submit the required forms.
Admin
Login to the admin panel.
Manage users and applications through the admin dashboard.
API Endpoints
Authentication
POST /api/auth/register - Register a new user
POST /api/auth/login - Login a user
User
GET /api/users - Get all users (Admin only)
GET /api/users/:id - Get a single user (Admin only)
PUT /api/users/:id - Update a user (Admin only)
DELETE /api/users/:id - Delete a user (Admin only)
Applications
POST /api/applications/bonafide - Apply for a bonafide certificate
POST /api/applications/scholarship - Apply for a scholarship
POST /api/applications/concession - Apply for a travel concession
GET /api/applications - Get all applications (Admin only)
GET /api/applications/:id - Get a single application (Admin only)
PUT /api/applications/:id - Update an application status (Admin only)
Screenshots


Contributing
Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make your changes.
Commit your changes (git commit -m 'Add some feature').
Push to the branch (git push origin feature-branch).
Open a pull request.

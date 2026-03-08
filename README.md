<!-- README.md -->

<h1 align="center">Task Manager - MERN Stack</h1>

<p align="center">
A full-stack task management application built with 
<b>React, Node.js, Express, and MongoDB</b>.
</p>

<hr>

<h2>Project Overview</h2>

<p>
This project allows users to register, login and manage tasks.
Users can create, update, delete and view tasks with authentication.
</p>

<ul>
<li>User Registration</li>
<li>User Login</li>
<li>Create Tasks</li>
<li>Update Tasks</li>
<li>Delete Tasks</li>
<li>View Task List</li>
<li>Toast Notifications</li>
</ul>

<hr>

<h2>Tech Stack</h2>

<h3>Frontend</h3>
<ul>
<li>React.js</li>
<li>React Router</li>
<li>Axios</li>
<li>React Toastify</li>
</ul>

<h3>Backend</h3>
<ul>
<li>Node.js</li>
<li>Express.js</li>
<li>MongoDB</li>
<li>Mongoose</li>
<li>JWT Authentication</li>
</ul>

<hr>

<h2>Project Structure</h2>

<pre>
task-manager
│
├── backend
│   ├── config
│   │   └── db.js
│   │
│   ├── controllers
│   │   ├── authController.js
│   │   └── taskController.js
│   │
│   ├── middleware
│   │   └── authMiddleware.js
│   │
│   ├── models
│   │   ├── User.js
│   │   └── Task.js
│   │
│   ├── routes
│   │   ├── authRoutes.js
│   │   └── taskRoutes.js
│   │
│   └── server.js
│
├── frontend
│   ├── src
│   │   ├── api
│   │   │   └── api.js
│   │   │
│   │   ├── components
│   │   │   ├── TaskForm.js
│   │   │   └── TaskList.js
│   │   │
│   │   ├── pages
│   │   │   ├── Login.js
│   │   │   ├── Register.js
│   │   │   └── Dashboard.js
│   │   │
│   │   ├── utils
│   │   │   └── toastHelper.js
│   │   │
│   │   └── App.js
│
└── README.md
</pre>

<hr>

<h2>Installation</h2>

<h3>1. Clone the Repository</h3>

<pre>
git clone https://github.com/yourusername/task-manager.git
cd task-manager
</pre>

<hr>

<h2>Backend Setup</h2>

<pre>
cd backend
npm install
</pre>

<h3>Create Environment Variables</h3>

Create a <b>.env</b> file inside the backend folder.

<pre>
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
</pre>

<h3>Run Backend Server</h3>

<pre>
npm start
</pre>

Server runs on:

<pre>
http://localhost:5000
</pre>

<hr>

<h2>Frontend Setup</h2>

<pre>
cd frontend
npm install
npm start
</pre>

Frontend runs on:

<pre>
http://localhost:3000
</pre>

<hr>

<h2>Environment Variables</h2>

<table border="1" cellpadding="8">
<tr>
<th>Variable</th>
<th>Description</th>
</tr>

<tr>
<td>PORT</td>
<td>Backend server port</td>
</tr>

<tr>
<td>MONGO_URI</td>
<td>MongoDB connection string</td>
</tr>

<tr>
<td>JWT_SECRET</td>
<td>Secret key for JWT authentication</td>
</tr>

</table>

<hr>

<h2>API Endpoints</h2>

<h3>Authentication</h3>

<table border="1" cellpadding="8">
<tr>
<th>Method</th>
<th>Endpoint</th>
<th>Description</th>
</tr>

<tr>
<td>POST</td>
<td>/api/auth/register</td>
<td>Register new user</td>
</tr>

<tr>
<td>POST</td>
<td>/api/auth/login</td>
<td>Login user</td>
</tr>

</table>

<h3>Tasks</h3>

<table border="1" cellpadding="8">

<tr>
<th>Method</th>
<th>Endpoint</th>
<th>Description</th>
</tr>

<tr>
<td>GET</td>
<td>/api/tasks</td>
<td>Get all tasks</td>
</tr>

<tr>
<td>POST</td>
<td>/api/tasks</td>
<td>Create new task</td>
</tr>

<tr>
<td>PUT</td>
<td>/api/tasks/:id</td>
<td>Update task</td>
</tr>

<tr>
<td>DELETE</td>
<td>/api/tasks/:id</td>
<td>Delete task</td>
</tr>

</table>

<hr>

<h2>Features</h2>

<ul>
<li>User authentication with JWT</li>
<li>Secure password hashing</li>
<li>Create tasks</li>
<li>Update tasks</li>
<li>Delete tasks</li>
<li>View task list</li>
<li>Toast notifications</li>
<li>Protected routes</li>
</ul>

<hr>

<h2>Future Improvements</h2>

<ul>
<li>Task status (Todo / Completed)</li>
<li>Task filtering</li>
<li>Task due date</li>
<li>Dark mode</li>
</ul>

<hr>

<h2>Author</h2>

<p>
Harikesh Tripathi<br>
GitHub: https://github.com/hari659tri
</p>

<hr>

<h2>License</h2>

<p>MIT License</p>


# 🔐 Secrets App

A secure full-stack web application that allows users to register, log in, and anonymously share their secrets. Built using **Node.js**, **Express**, **MongoDB**, and **Passport.js** for authentication.
visit my App at https://authentication-r7cd.onrender.com
## 🧰 Tech Stack

- **Frontend**: EJS (Embedded JavaScript Templates)
- **Backend**: Node.js, Express
- **Database**: MongoDB (with Mongoose ODM)
- **Authentication**: Passport.js (Local strategy)
- **Security**: bcrypt for password hashing, environment variables for secret keys

## ✨ Features

- User registration and login
- Password encryption using bcrypt
- Anonymous secret submission
- Display of all submitted secrets without revealing user identity
- Logout functionality
- Session handling with express-session

## 📁 Project Structure

```

secrets-app/
├── app.js
├── .env
├── package.json
├── views/
│   ├── home.ejs
│   ├── login.ejs
│   ├── register.ejs
│   ├── secrets.ejs
│   └── submit.ejs
├── public/
│   └── (static CSS/JS files)
└── models/
└── user.js

````

## ⚙️ Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/ManneUdayKiran/secrets-app.git
cd secrets-app
````

2. **Install dependencies**

```bash
npm install
```

3. **Create a `.env` file**

```bash
touch .env
```

Add the following:

```
PORT=3000
MONGODB_URI=your_mongodb_connection_string
SESSION_SECRET=your_session_secret
```

4. **Start the server**

```bash
node app.js
```

5. **Visit the app**

Open your browser and go to `http://localhost:3000`

## 🔐 Authentication

Passport.js is used with the Local Strategy to manage sessions. User passwords are encrypted using bcrypt before being stored in MongoDB.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Manne UdayKiran**
[GitHub](https://github.com/ManneUdayKiran)



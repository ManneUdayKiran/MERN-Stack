
# 📝 ToDo List App

A simple and responsive ToDo List web application that allows users to manage their daily tasks efficiently.
---
visit my app at https://todolist-sb6h.onrender.com

## 📌 Features

- Add new tasks
- Mark tasks as completed
- Delete individual tasks
- Persistent storage using MongoDB (optional)
- Clean UI with Bootstrap

## 💻 Tech Stack

- **Frontend**: HTML, CSS, Bootstrap, EJS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose (or in-memory if not using DB)

## 🚀 Live Demo

Coming soon or host it on [Render](https://render.com), [Vercel](https://vercel.com), or [Netlify](https://netlify.com).

## 🗂️ Project Structure

```

todolist-app/
├── views/
│   ├── index.ejs
│   └── partials/
│       └── header.ejs
├── public/
│   ├── css/
│   └── js/
├── models/
│   └── task.js
├── routes/
│   └── index.js
├── app.js
├── package.json
└── .env

````

## ⚙️ Installation

1. **Clone the repository**

```bash
git clone https://github.com/ManneUdayKiran/todolist-app.git
cd todolist-app
````

2. **Install dependencies**

```bash
npm install
```

3. **(Optional) Set up `.env` file**

If you're using MongoDB, create a `.env` file:

```
PORT=3000
MONGODB_URI=your_mongodb_connection_string
```

4. **Start the server**

```bash
node app.js
```

5. **Visit the app**

Go to `http://localhost:3000` in your browser.



## 📄 License

This project is licensed under the [MIT License](LICENSE).

## 👨‍💻 Author

**ManneUdayKiran**
[GitHub](https://github.com/ManneUdayKiran)


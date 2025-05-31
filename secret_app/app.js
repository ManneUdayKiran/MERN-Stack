const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const app = express();

// Set the views directory
app.set('views', path.join(__dirname, 'views'));

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/secrets', { useNewUrlParser: true, useUnifiedTopology: true });
const encrypt = require('mongoose-encryption');
// Define a schema
const trySchema = new mongoose.Schema({
    emails: String,
    password: String
});
const secret="thisislittlesecret";
trySchema.plugin(encrypt,{secret:secret,encryptedFields:["password"]});
// Define a model
const Item = mongoose.model('Second', trySchema);

// Define routes to render EJS views
app.get('/', (req, res) => {
    res.render('home');
});

app.post('/register', async (req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = new Item({
        emails: req.body.username,
        password: hashedPassword
    });

    try {
        await newUser.save();
        res.render('secrets');
    } catch (err) {
        console.log(err);
        res.send('There was an error saving the user.');
    }
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const foundUser = await Item.findOne({ emails: username });
        if (foundUser) {
            const match = await bcrypt.compare(password, foundUser.password);
            if (match) {
                res.render('secrets');
            } else {
                res.send('Incorrect password. Please try again.');
            }
        } else {
            res.send('User not found. Please check your username.');
        }
    } catch (error) {
        console.error('Error logging in:', error); // Log the error to the console
        res.send('An error occurred while logging in. Please try again later.');
    }
});



app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/register', (req, res) => {
    res.render('register');
});
app.get('/logout', (req, res) => {
    // Perform logout operations here (e.g., clearing session data, redirecting to login page)
    // For demonstration purposes, let's redirect to the login page
    res.redirect('home');
});

app.get('/logout', (req, res) => {
    // Send a response indicating that the user has accessed the home page
    res.redirect('home');
});
// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const session = require('express-session');
const mongoSanitize = require('express-mongo-sanitize');

const User = require('./models/user');
const userRoutes = require('./routes/users');
const gameRoutes = require('./routes/games');

mongoose.set('strictQuery', false); // optional: suppress deprecation warning

// Use environment variable or fallback
const dbUrl = process.env.DB_URL || "mongodb://localhost:27017/Cloudify";

mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Database connected"))
.catch(err => console.error("MongoDB connection error:", err));

const app = express();

const secret = process.env.SECRET || 'thisshouldbeabettersecret!';

const sessionConfig = {
    name: 'session',
    secret,
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        // secure: true, // enable in production with HTTPS
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
};

app.use(express.json());
app.set("view engine", "ejs");
app.use(session(sessionConfig));
app.use(passport.initialize());
app.use(passport.session());
app.use(mongoSanitize());

// Passport config
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Routes
app.use('/', userRoutes);
app.use('/games', gameRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Serving on port ${port}`);
});

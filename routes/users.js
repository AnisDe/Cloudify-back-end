const express = require('express');
const router = express.Router();
const users = require('../controllers/users');
const passport = require('passport');
const { isLoggedIn } = require('../middleware');


router.post('/register', users.register);

router.post('/login', passport.authenticate('local'),users.login);

router.post('/logout', users.logout);

router.post('/forgot', users.forgot);

router.post('/reset/:token', users.PostResetToken);

router.post('/edit/:id', users.editUser);

router.post('/buyGame/:id', users.BuyGame);

router.get('/verify-email/:token', users.verifyEmail);

router.get('/profile/:id', users.profile);

router.get('/reset/:token', users.GetResetToken);

router.get('/login', users.loginview);

router.get('/buyGame/:id', isLoggedIn, users.buy);

router.delete('/:id', users.DeleteUser);

module.exports = router;

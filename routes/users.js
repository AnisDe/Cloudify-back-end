const express = require('express');
const router = express.Router();
const users = require('../controllers/users');
const { isLoggedIn } = require('../middleware');


router.post('/register', users.register);

router.post('/login', users.login);

router.post('/logout', users.logout);

router.post('/forgot', users.forgot);

router.post('/reset/:token', users.PostResetToken);

router.post('/edit/:id', users.editUser);

router.get('/verify-email/:token', users.verifyEmail);

router.get('/profile/:id', users.profile);

router.get('/reset/:token', users.GetResetToken);

router.delete('/:id', users.DeleteUser);

module.exports = router;

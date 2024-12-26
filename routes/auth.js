const express = require('express');
const passport = require('passport');
const User = require('../models/user');
const router = express.Router();

// Signup Route
router.post('/signup', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.create({ email, password });
    res.status(201).json({ message: 'User created', user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Login Route
router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    console.log('Request Body:', req.body);
    console.log('User Found:', user);
    if (err) return next(err);
    if (!user) return res.status(400).json({ error: info.message });

    req.logIn(user, (err) => {
      if (err) return next(err);
      res.json({ message: 'Logged in', user });
    });
  })(req, res, next);
});

// Logout Route
router.get('/logout', (req, res) => {
  req.logout((err) => {
   

    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Logged out' });
  });
});

module.exports = router;

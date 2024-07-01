const express = require('express');
const router = express.Router();
const db = require('../db/database');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  
  db.get('SELECT * FROM users WHERE username = ?', [username], (err, user) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    if (!user || user.password !== password) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ username: user.username }, 'secret-key', { expiresIn: '1h' });
    res.json({ token });
  });
});

module.exports = router;

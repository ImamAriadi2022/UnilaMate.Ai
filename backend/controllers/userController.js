const admin = require('../config/auth');
const User = require('../models/User');

// Register user
exports.registerUser = async (req, res) => {
  const { email, password, name } = req.body;

  try {
    const userRecord = await admin.auth().createUser({
      email,
      password,
    });
    const user = new User({
      uid: userRecord.uid,
      email,
      name,
    });
    await user.save();
    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Login user
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await admin.auth().getUserByEmail(email);
    if (user) {
      res.status(200).json({ message: 'User logged in successfully', user });
    }
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
};

const User = require('../models/User');

// Fetch all users
const getAllUsers = async (req, res) => {
   try {
      const users = await User.find();
      res.json(users);
   } catch (error) {
      res.status(500).json({ message: 'Server Error' });
   }
};

// Create a new user
const createUser = async (req, res) => {
   try {
      const { name, email, role, phone_number } = req.body;
      const newUser = new User({ name, email, role, phone_number });
      await newUser.save();
      res.status(201).json(newUser);
   } catch (error) {
      res.status(500).json({ message: 'Server Error' });
   }
};

module.exports = { getAllUsers, createUser };

const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
   {
      name: { type: String, required: true },
      email: { type: String, required: true, unique: true },
      role: { type: String, enum: ['student', 'mentor', 'admin'], required: true },
      phone_number: { type: String },
   },
   { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
const mongoose = require('mongoose');

const locationSchema = mongoose.Schema(
   {
      student_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
      latitude: { type: Number, required: true },
      longitude: { type: Number, required: true },
   },
   { timestamps: true }
);

module.exports = mongoose.model('Location', locationSchema);
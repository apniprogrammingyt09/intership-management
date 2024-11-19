const mongoose = require('mongoose');

const notificationSchema = mongoose.Schema(
   {
      user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
      message: { type: String, required: true },
      read_status: { type: Boolean, default: false },
   },
   { timestamps: true }
);

module.exports = mongoose.model('Notification', notificationSchema);
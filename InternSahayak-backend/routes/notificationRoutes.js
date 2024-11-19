const express = require('express');
const {
  getAllNotifications,
  getUserNotifications,
  createNotification,
  markNotificationAsRead,
  deleteNotification,
} = require('../controllers/notificationController');

const router = express.Router();

router.get('/', getAllNotifications); // Get all notifications (for admin use)
router.get('/:user_id', getUserNotifications); // Get notifications for a specific user
router.post('/', createNotification); // Create a notification
router.put('/:id/read', markNotificationAsRead); // Mark a notification as read
router.delete('/:id', deleteNotification); // Delete a notification

module.exports = router;
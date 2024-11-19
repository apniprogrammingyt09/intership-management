const express = require('express');
const { getLocationsByStudentId, createLocation } = require('../controllers/locationController');

const router = express.Router();

router.get('/:student_id', getLocationsByStudentId); // Get locations for a specific student
router.post('/', createLocation); // Create a location

module.exports = router;
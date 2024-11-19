const express = require('express');
const { getAllInternships, createInternship, getInternshipById, updateInternship, deleteInternship } = require('../controllers/internshipController');

const router = express.Router();

router.get('/', getAllInternships); // Fetch all internships
router.post('/', createInternship); // Create a new internship
router.get('/:id', getInternshipById); // Fetch internship by ID
router.put('/:id', updateInternship); // Update internship
router.delete('/:id', deleteInternship); // Delete internship

module.exports = router;
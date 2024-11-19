const express = require('express');
const { getAllReports, createReport, getReportById, updateReport, deleteReport } = require('../controllers/reportController');

const router = express.Router();

router.get('/', getAllReports); // Fetch all reports
router.post('/', createReport); // Create a new report
router.get('/:id', getReportById); // Fetch report by ID
router.put('/:id', updateReport); // Update report
router.delete('/:id', deleteReport); // Delete report

module.exports = router;
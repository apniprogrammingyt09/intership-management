const Report = require('../models/Report');

// Get all reports
const getAllReports = async (req, res) => {
   try {
      const reports = await Report.find().populate('internship_id', 'company_name student_id');
      res.json(reports);
   } catch (error) {
      res.status(500).json({ message: 'Server Error' });
   }
};

// Create a new report
const createReport = async (req, res) => {
   try {
      const report = new Report(req.body);
      await report.save();
      res.status(201).json(report);
   } catch (error) {
      res.status(500).json({ message: 'Server Error' });
   }
};

// Get report by ID
const getReportById = async (req, res) => {
   try {
      const report = await Report.findById(req.params.id).populate('internship_id', 'company_name student_id');
      if (!report) return res.status(404).json({ message: 'Report not found' });
      res.json(report);
   } catch (error) {
      res.status(500).json({ message: 'Server Error' });
   }
};

// Update report
const updateReport = async (req, res) => {
   try {
      const report = await Report.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!report) return res.status(404).json({ message: 'Report not found' });
      res.json(report);
   } catch (error) {
      res.status(500).json({ message: 'Server Error' });
   }
};

// Delete report
const deleteReport = async (req, res) => {
   try {
      const report = await Report.findByIdAndDelete(req.params.id);
      if (!report) return res.status(404).json({ message: 'Report not found' });
      res.json({ message: 'Report deleted successfully' });
   } catch (error) {
      res.status(500).json({ message: 'Server Error' });
   }
};

module.exports = { getAllReports, createReport, getReportById, updateReport, deleteReport };
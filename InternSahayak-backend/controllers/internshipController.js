const Internship = require('../models/Internship');

// Get all internships
const getAllInternships = async (req, res) => {
   try {
      const internships = await Internship.find().populate('student_id internal_mentor_id', 'name email');
      res.json(internships);
   } catch (error) {
      res.status(500).json({ message: 'Server Error' });
   }
};

// Create a new internship
const createInternship = async (req, res) => {
   try {
      const internship = new Internship(req.body);
      await internship.save();
      res.status(201).json(internship);
   } catch (error) {
      res.status(500).json({ message: 'Server Error' });
   }
};

// Get internship by ID
const getInternshipById = async (req, res) => {
   try {
      const internship = await Internship.findById(req.params.id).populate('student_id internal_mentor_id', 'name email');
      if (!internship) return res.status(404).json({ message: 'Internship not found' });
      res.json(internship);
   } catch (error) {
      res.status(500).json({ message: 'Server Error' });
   }
};

// Update internship
const updateInternship = async (req, res) => {
   try {
      const internship = await Internship.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!internship) return res.status(404).json({ message: 'Internship not found' });
      res.json(internship);
   } catch (error) {
      res.status(500).json({ message: 'Server Error' });
   }
};

// Delete internship
const deleteInternship = async (req, res) => {
   try {
      const internship = await Internship.findByIdAndDelete(req.params.id);
      if (!internship) return res.status(404).json({ message: 'Internship not found' });
      res.json({ message: 'Internship deleted successfully' });
   } catch (error) {
      res.status(500).json({ message: 'Server Error' });
   }
};

module.exports = { getAllInternships, createInternship, getInternshipById, updateInternship, deleteInternship };
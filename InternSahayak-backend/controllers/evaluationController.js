const Evaluation = require('../models/Evaluation');

// Get all evaluations
const getAllEvaluations = async (req, res) => {
  try {
    const evaluations = await Evaluation.find().populate('internship_id', 'company_name student_id');
    res.json(evaluations);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get evaluations for a specific internship
const getEvaluationByInternship = async (req, res) => {
  try {
    const evaluations = await Evaluation.find({ internship_id: req.params.internship_id });
    res.json(evaluations);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Create a new evaluation
const createEvaluation = async (req, res) => {
  try {
    const evaluation = new Evaluation(req.body);
    await evaluation.save();
    res.status(201).json(evaluation);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Update an evaluation
const updateEvaluation = async (req, res) => {
  try {
    const evaluation = await Evaluation.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!evaluation) return res.status(404).json({ message: 'Evaluation not found' });
    res.json(evaluation);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Delete an evaluation
const deleteEvaluation = async (req, res) => {
  try {
    const evaluation = await Evaluation.findByIdAndDelete(req.params.id);
    if (!evaluation) return res.status(404).json({ message: 'Evaluation not found' });
    res.json({ message: 'Evaluation deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  getAllEvaluations,
  getEvaluationByInternship,
  createEvaluation,
  updateEvaluation,
  deleteEvaluation,
};
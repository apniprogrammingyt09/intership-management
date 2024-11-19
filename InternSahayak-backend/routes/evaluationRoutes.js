const express = require('express');
const {
  getAllEvaluations,
  getEvaluationByInternship,
  createEvaluation,
  updateEvaluation,
  deleteEvaluation,
} = require('../controllers/evaluationController');

const router = express.Router();

router.get('/', getAllEvaluations); // Get all evaluations
router.get('/:internship_id', getEvaluationByInternship); // Get evaluations for a specific internship
router.post('/', createEvaluation); // Create a new evaluation
router.put('/:id', updateEvaluation); // Update an evaluation
router.delete('/:id', deleteEvaluation); // Delete an evaluation

module.exports = router;
const mongoose = require('mongoose');

const evaluationSchema = mongoose.Schema(
   {
      internship_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Internship', required: true },
      external_evaluation: { type: String },
      internal_mentor_grade: { type: String },
   },
   { timestamps: true }
);

module.exports = mongoose.model('Evaluation', evaluationSchema);
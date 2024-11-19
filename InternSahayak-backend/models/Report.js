const mongoose = require('mongoose');

const reportSchema = mongoose.Schema(
   {
      internship_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Internship', required: true },
      report_type: { type: String, enum: ['fortnightly', 'assignment'], required: true },
      submission_date: { type: Date, required: true },
      grade: { type: String },
      file_url: { type: String },
   },
   { timestamps: true }
);

module.exports = mongoose.model('Report', reportSchema);
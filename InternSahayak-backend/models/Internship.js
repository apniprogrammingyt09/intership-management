const mongoose = require('mongoose');

const internshipSchema = mongoose.Schema(
   {
      student_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
      internal_mentor_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
      external_mentor_name: { type: String, required: true },
      external_mentor_contact: { type: String, required: true },
      external_mentor_email: { type: String, required: true },
      company_name: { type: String, required: true },
      company_address: { type: String, required: true },
      company_registration_number: { type: String, required: true },
      company_verification_status: { type: Boolean, default: false },
      city: { type: String, required: true },
      start_date: { type: Date, required: true },
      stipend_amount: { type: Number },
      offer_letter_url: { type: String },
   },
   { timestamps: true }
);

module.exports = mongoose.model('Internship', internshipSchema);
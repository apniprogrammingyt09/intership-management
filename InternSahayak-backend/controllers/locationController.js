const Location = require('../models/Location');

// Get locations for a specific student
const getLocationsByStudentId = async (req, res) => {
   try {
      const locations = await Location.find({ student_id: req.params.student_id });
      res.json(locations);
   } catch (error) {
      res.status(500).json({ message: 'Server Error' });
   }
};

// Create a new location
const createLocation = async (req, res) => {
   try {
      const location = new Location(req.body);
      await location.save();
      res.status(201).json(location);
   } catch (error) {
      res.status(500).json({ message: 'Server Error' });
   }
};

module.exports = { getLocationsByStudentId, createLocation };
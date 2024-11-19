// Error handling middleware
const errorHandler = (err, req, res, next) => {
    // Log the error for debugging (you can replace it with a logging library)
    console.error(err.stack);
  
    // Determine if the error is a MongoDB error or any custom error
    if (err.name === 'ValidationError') {
      // Handling validation error from Mongoose
      return res.status(400).json({
        message: err.message,
        details: err.errors, // If needed, you can log specific error details
      });
    }
  
    if (err.name === 'CastError' && err.kind === 'ObjectId') {
      // Handling MongoDB invalid ObjectId error
      return res.status(400).json({
        message: 'Invalid ObjectId format',
      });
    }
  
    // If it is a custom error (created with `new Error('message')`)
    if (err.message) {
      return res.status(500).json({
        message: err.message,
      });
    }
  
    // Generic error handling for all other errors
    res.status(500).json({
      message: 'An unexpected error occurred',
      error: err.message || 'Internal Server Error',
    });
  };
  
  module.exports = errorHandler;
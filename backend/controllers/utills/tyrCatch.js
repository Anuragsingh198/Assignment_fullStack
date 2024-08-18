const tryCatch = (controller) => {
    return async (req, res, next) => {
      try {
        await controller(req, res, next);
      } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ success: false, message: "An error occurred", error: error.message });
      }
    };
  };
  
  module.exports = tryCatch;
  
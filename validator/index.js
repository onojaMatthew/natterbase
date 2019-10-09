// =========================================================================
// Handles input validation and check that no input field is submitted empty
// =========================================================================

exports.testValidator = (req, res, next) => {
  req.check( "type", "type is required" ).notEmpty();
  req.check( "crux", "Crux is required" ).notEmpty();
  req.check( "color", "Color is required" ).notEmpty();
  req.check( "title", "title is required" ).notEmpty();
    
  const errors = req.validationErrors();
  
  // We first check for errors. If there is return status code of 400 and the error messages
    if (errors) {
      return res.status(400).json({ error: errors });
    }
  
    next();
}
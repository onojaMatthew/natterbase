const { check, validationResult } = require('express-validator');

exports.campusValidator = (req, res) => {
    check("name", "Campus name is required").notEmpty()
      .isLength({
        min: 4,
        max: 32
      })
      .withMessage("Campus name must be at least 4 characters long");
  
    // const errors = validationErrors();
  
    const errors = validationResult();
    if (errors) {
      // const firstError = errors.map((error) => error.msg)[0];
      // return res.status(400).json({
      //   error: firstError
      // })
      return res.status(400).json({ error: errors.array() });
    }
  
    next();
}
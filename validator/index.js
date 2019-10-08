// const { check, validationResult } = require('express-validator');

exports.testValidator = (req, res, next) => {
  req.check( "type", "type is required" )
    .notEmpty()
    .isLength({
      min: 4,
      max: 32
    })
    .withMessage( "type must be at least 4 characters long" );
  
  req.check( "crux", "Crux is required" )
    .notEmpty()
    .isLength( {
      min: 4,
      max: 32
    } )
    .withMessage( "Crux must be at least 4 characters long" );
  
  req.check( "color", "Color is required" )
    .notEmpty()
    .isLength( {
      min: 3,
      max: 32
    } )
    .withMessage( "Colro must be at least 4 characters long" );
  req.check( "title", "title is required" )
    .notEmpty()
    .isLength( {
      min: 4,
      max: 32
    } )
    .withMessage( "title must be at least 4 characters long" );
  
    const errors = req.validationErrors();
  
    // const errors = validationResult();
    if (errors) {
      // const firstError = errors.map((error) => error.msg)[0];
      // return res.status(400).json({
      //   error: firstError
      // })
      return res.status(400).json({ error: errors });
    }
  
    next();
}
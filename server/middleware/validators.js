// server/middleware/validators.js
const { body, validationResult } = require('express-validator');

const postValidation = [
  body('title').isLength({min:3}).withMessage('Title too short'),
  body('content').isLength({min:10}).withMessage('Content too short'),
  body('category').optional().isMongoId().withMessage('Invalid category id'),
  (req,res,next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
  }
];

module.exports = { postValidation };

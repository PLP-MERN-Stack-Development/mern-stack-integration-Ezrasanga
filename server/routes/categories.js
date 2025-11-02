// server/routes/categories.js
const express = require('express');
const router = express.Router();
const Category = require('../models/Category');
const { body, validationResult } = require('express-validator');

router.get('/', async (req,res,next)=>{
  try { const cats = await Category.find().sort('name'); res.json(cats); } catch(e){ next(e); }
});

router.post('/', [ body('name').notEmpty() ], async (req,res,next)=>{
  try {
    const errors = validationResult(req); if(!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    const { name, description } = req.body;
    const cat = new Category({ name, description });
    await cat.save();
    res.status(201).json(cat);
  } catch(err){ next(err); }
});

module.exports = router;

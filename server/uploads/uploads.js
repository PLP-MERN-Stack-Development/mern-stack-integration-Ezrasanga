// server/routes/uploads.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const cloudinary = require('../services/cloudinary');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const auth = require('../middleware/auth');

const storage = new CloudinaryStorage({
  cloudinary,
  params: { folder: 'blog_images', allowedFormats: ['jpg','png','jpeg'] }
});
const parser = multer({ storage });

router.post('/', auth, parser.single('image'), (req,res)=>{
  // req.file.path contains cloudinary url
  res.json({ url: req.file.path });
});

module.exports = router;

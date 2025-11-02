const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

// GET all posts
router.get("/", async (req, res, next) => {
  try {
    const posts = await Post.find().populate("category");
    res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
});

// GET single post by ID
router.get("/:id", async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id).populate("category");
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.json(post);
  } catch (error) {
    next(error);
  }
});

// POST create a new post
router.post("/", async (req, res, next) => {
  try {
    const newPost = new Post(req.body);
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (error) {
    next(error);
  }
});

// PUT update a post
router.put("/:id", async (req, res, next) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedPost);
  } catch (error) {
    next(error);
  }
});

// DELETE a post
router.delete("/:id", async (req, res, next) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.json({ message: "Post deleted" });
  } catch (error) {
    next(error);
  }
});

module.exports = router;

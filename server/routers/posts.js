import express from 'express';
import { getAllPosts, createPost,deletePost } from '../controllers/posts.js';
import validationPost from '../models/validation.js';
import upload from '../config/multer.js';

// selectedFile

const router = express.Router();

// Get all posts
router.get('/', getAllPosts);
// Create a new post
router.post('/',upload.single("selectedFile"),validationPost, createPost);
// Remove a post
router.delete('/:id', deletePost);


export default router;

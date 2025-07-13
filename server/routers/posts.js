import { getAllPosts, createPost,deletePost } from '../controllers/posts.js';
import express from 'express';

const router = express.Router();

// Get all posts
router.get('/', getAllPosts);
// Create a new post
router.post('/', createPost);
// Remove a post
router.delete('/:id', deletePost);


export default router;
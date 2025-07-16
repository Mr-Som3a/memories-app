import express from 'express';
import { getAllPosts, createPost,deletePost } from '../controllers/posts.js';
// import upload from '../models/uploadFile.js';
import validationPost, { postSchema } from '../models/validation.js';
import multer from 'multer';
const upload = multer({dest:'uploads/'})



const router = express.Router();

// Get all posts
router.get('/', getAllPosts);
// Create a new post
router.post('/',upload.single('selectedFile'),validationPost(postSchema), createPost);
// Remove a post
router.delete('/:id', deletePost);


export default router;

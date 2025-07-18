import Post from "../models/posts.js";

// Get all posts
export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    return res.status(200).json(posts);
  } catch (error) {
    res
      .status(500)
      .json({ message: error.message })
  }
};

export const createPost = async (req, res) => {
  console.log(req.body,'solo')
  
  try {
    
    const { title, message, creator, tags} = req.body;
    const selectedFile = `/uploads/${req.file?.filename}`||null;
  
    const post = new Post({
      title,
      message,
      creator,
      tags,
      selectedFile,
    });
    const newPost = await post.save();
   return res.status(201).json(newPost);
  } catch (error) {
    return res
      .status(400)
      .json({ message: error.message })
  }
};
// Delete a post
export const deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findByIdAndDelete(id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    return res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
   return  res.status(500).json({ message: error.message });
  }
};

import Post from "../models/posts.js";

// Get all posts
export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts).send("Posts retrieved successfully");
  } catch (error) {
    res
      .status(500)
      .json({ message: error.message })
      .send("Error retrieving posts");
  }
};

export const createPost = async (req, res) => {
  try {
    const { title, message, creator, tags } = req.body;
    const selectedFile = req.file.path;

    const post = new Post({
      title,
      message,
      creator,
      tags,
      selectedFile,
    });
    await post.save();
    res.status(201).json(post).send("Post created successfully");
  } catch (error) {
    res
      .status(400)
      .json({ message: error.message })
      .send("Error creating post", req.body);
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
    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

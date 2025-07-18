import validatePost from "./validation";
import axios from 'axios'

// 'http://localhost:5000/posts'
const URL = import.meta.env.VITE_API_URL+'/posts'

export const fetchPosts = async () => {
  try {
    const response = await fetch(URL,{
        method: 'GET',
    });
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // console.log(response.json());
    return await response.json();
    
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
}

//creating a post 
export const createPost = async (postData)=>{
  console.log(postData)

  const validate = validatePost(postData)
  if(!validate){
    throw new Error("validation not accepted");
  }

  try {
    const res = await axios.post(URL,postData,{ headers: {
      'Content-Type': 'multipart/form-data',
    }})
    console.log(res)
    return res
  } catch (err) {
    console.log(err,'error axios')
  }

}


export const deletePost = async (postId) => {
  try {
    const response = await fetch(`${URL}/${postId}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error deleting post:', error);
    throw error;
  }
}
export const updatePost = async (postId, postData)=>{
  try {
    const response = await fetch(`${URL}/${postId}`,{postData, method: 'PUT'});
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    throw new Error('Error updating post:', error);
  }
}
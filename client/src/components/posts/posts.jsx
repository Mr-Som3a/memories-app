import { useEffect, useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { getAllPosts,removePost} from '../../storeSlice/posts'
import Post from './post/post'
import setStyles from './styles'
import Card from '@mui/material/Card';


const Posts= () => {
  const dispatch = useDispatch()
  const {posts,status, error} = useSelector((state) => state.posts)
  const classes = setStyles
  useEffect(() => {

    if(status === 'idle') {
      dispatch(getAllPosts())
   
    } 
  }, [status, dispatch]);
console.log(dispatch)
  const handleDelete = (postId) => {
    dispatch(removePost(postId));
    dispatch()  
  }

  if (status === 'loading') return <p>Loading posts...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;
  // if (posts.length === 0) return <p>No posts available</p>;
  return (
    <>
      <h2>Posts</h2>
      {posts.map((post) => (
        < Card  key={post._id} sx={classes.header}>
      
          <Post post={post} />
          <button onClick={() => handleDelete(post._id)}>Delete</button>
        </Card>
      ))}
      
    </>
  )
}

export default Posts
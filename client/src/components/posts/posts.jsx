import { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { getAllPosts,removePost} from '../../storeSlice/posts'
import Post from './post/post'



const Posts= () => {
  const dispatch = useDispatch()
  const {posts,status, error} = useSelector((state) => state.posts)
  useEffect(() => {

    if(status === 'idle') {
      dispatch(getAllPosts())
   
    } 
  }, [status, dispatch]);

  const handleDelete = (postId) => {
    dispatch(removePost(postId));  
  }

  if (status === 'loading') return <p>Loading posts...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;
  return (
    <>
      {posts.map((post) => (
        <div key={post._id}>
      
          <Post post={post} onDelete={handleDelete} />
        </div>
      ))}
      
    </>
  )
}

export default Posts
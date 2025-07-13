import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchPosts, deletePost,updatePost,createPost } from "../api/httpService";


export const getAllPosts = createAsyncThunk('posts/fetchPosts',fetchPosts)
export const removePost = createAsyncThunk('posts/removePost', deletePost)
export const addPost = createAsyncThunk('posts/addPost', createPost)
export const editPost = createAsyncThunk('posts/editPost', updatePost)

const postsSlice = createSlice({
    name: 'posts',
    initialState:{
        posts: [],
        status: 'idle', // 'idle' | 'loading' | 'succeeded'
        error: null,

    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllPosts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getAllPosts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.posts = action.payload;
            })
            .addCase(getAllPosts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // Handle addPost
            .addCase(addPost.fulfilled,(state,action)=>{
                state.posts.push(action.payload);
                state.status = 'succeeded';
            })
            // Handle removePost
            .addCase(removePost.pending, (state) => {
                state.status = 'loading';
            }).addCase(removePost.fulfilled, (state, action) => {
                const postId = action.payload.id;
                state.posts = state.posts.filter(post => post.id !== postId);
                state.status = 'idle';
            }).addCase(removePost.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // Handle editPost
            .addCase(editPost.fulfilled, (state, action) => {
                const updatedPost = action.payload;
                const index = state.posts.findIndex(post => post.id === updatedPost.id);
                if (index !== -1) {
                    state.posts[index] = updatedPost;
                }
                state.status = 'idle';
            });
    }

})

// export const { gPosts, cPost, dPost } = postsSlice.actions;
export default postsSlice.reducer;
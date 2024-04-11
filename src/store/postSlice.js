import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  loading: true,
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter((post) => post.$id !== action.payload);
    },
    editPost: (state, action) => {
      const updatedPosts = state.posts.map((post) =>
        post.$id === action.payload.$id ? action.payload : post
      );
    
      state.posts = updatedPosts;
    },
    setPosts:(state,action) =>{
      state.posts = action.payload;
    }
  },
});

export const { addPost, deletePost, editPost, setPosts } = postSlice.actions;

export default postSlice.reducer;

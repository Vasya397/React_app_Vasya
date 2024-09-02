import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My Post
      <div>
        <textarea></textarea>
        <button> Add Post </button>
        <button> Delete </button>
      </div>
      <div className={s.posts}>
        <Post message="Hi, cheburek" />
        <Post message="Privet" num='20' />
        <Post num='15'/> 
      </div>
    </div>
  );
};

export default MyPosts;

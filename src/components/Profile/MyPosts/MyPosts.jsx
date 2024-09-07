import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.posts.map((post) => (
    <Post key={post.id} message={post.message} likesCount={post.likesCount} />
  ));

  return (
    <div className={s.postsBlock}>
      My Post
      <div>
        <div>
          <textarea></textarea>
        </div>
        <button> Add Post </button>
        <button> Delete </button>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;

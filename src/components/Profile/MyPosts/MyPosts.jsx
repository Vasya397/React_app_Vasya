import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let posts = [
    { id: 1, message: "Hi, how are you?", likesCount: 20 },
    { id: 2, message: "It`s my first post", likesCount: 18 },
    { id: 3, message: "It`s my", likesCount: 9 },
    { id: 4, message: "It`s mynecraft", likesCount: 20 },
  ];

  let postsElements = posts.map((post) => (
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

import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.posts?.map((post) => (
    <Post key={post.id} message={post.message} likesCount={post.likesCount} />
  ));

  let newPostText = props.newPostText;

  let addPost = () => {
    props.addPost();
  };

  let onPostTextChange = (event) => {
    let text = event.target.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={s.postsBlock}>
      My Post
      <div>
        <div>
          <textarea
            placeholder="Напишите пост"
            onChange={onPostTextChange}
            value={newPostText}
          />
        </div>
        <button onClick={addPost}>Add Post</button>
        <button> Delete </button>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;

import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { useForm } from "react-hook-form";

const MyPosts = (props) => {
  let postsElements = props.posts.map((post) => (
    <Post key={post.id} message={post.message} likesCount={post.likesCount} />
  ));

  const onAddPost = (message) => {
    props.addPost(message);
  };

  return (
    <div className={s.postsBlock}>
      My Post
      <AddPostForm onAddPost={onAddPost} />
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

const AddPostForm = ({ onAddPost }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    onAddPost(data.message);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <textarea
        {...register("message", {
          required: "Не может быть пустым",
          maxLength: { value: 10, message: "Слишком много символов" },
        })}
        placeholder="Напишите пост"
      ></textarea>
      {errors.message && (
        <div>
          <p> {errors.message.message}</p>
        </div>
      )}
      <button type="submit">Отправить</button>
    </form>
  );
};

export default MyPosts;

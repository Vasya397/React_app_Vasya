import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://avatars.mds.yandex.net/i?id=6117ab96a9106f7bce6610b3e120c7c364be021e-4078174-images-thumbs&n=13"></img>
      {props.message}
      <div></div>
    </div>
  );
};

export default Post;

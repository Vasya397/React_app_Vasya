import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src="https://avatars.mds.yandex.net/i?id=c6998ef553c3afca5f2b4551f20f41bfc0fa374b-5734463-images-thumbs&n=13"></img>{" "}
      </div>
      <div>ava + description</div>
      <MyPosts /> 
    </div>
  );
};

export default Profile;

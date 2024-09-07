import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://avatars.mds.yandex.net/i?id=c6998ef553c3afca5f2b4551f20f41bfc0fa374b-5734463-images-thumbs&n=13"></img>{" "}
      </div>
      <div className={s.descriptionBlock}> ava + description </div>
    </div>
  );
};

export default ProfileInfo;

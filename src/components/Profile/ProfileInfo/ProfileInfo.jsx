import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div>
        <img src="https://avatars.mds.yandex.net/i?id=c6998ef553c3afca5f2b4551f20f41bfc0fa374b-5734463-images-thumbs&n=13"></img>
      </div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} />
        <ProfileStatus status={"hello"} />
      </div>
    </div>
  );
};

export default ProfileInfo;

import React from "react";
import './Profile.css'

const Profile = () => {
  return (
    <div className="content">
      <div>
        <img src="https://avatars.mds.yandex.net/i?id=c6998ef553c3afca5f2b4551f20f41bfc0fa374b-5734463-images-thumbs&n=13"></img>{" "}
      </div>
      <div>ava + description</div>
      <div>
        My Post
        <div>New Post</div>
        <div className="posts">
          <div className="item">
            post 1 
          </div>
        </div>
        <div>
          <div>post 1</div>
          <div>post 2</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

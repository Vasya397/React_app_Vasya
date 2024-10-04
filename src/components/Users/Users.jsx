import React from "react";
import styles from "./users.module.css";

let Users = (props) => {
  if (props.users.length === 0) {
    let users = [
      {
        id: 1,
        photoUrl:
          "https://avatars.mds.yandex.net/i?id=4aff8b776623cf23f90cf51f1e47d572e8244ed2-10349474-images-thumbs&n=13",
        followed: false,
        fullName: "Egor",
        status: "12 минут назад в сети",
        location: { city: "Minsk", country: "Belarus" },
      },
      {
        id: 2,
        photoUrl:
          "https://avatars.mds.yandex.net/i?id=4aff8b776623cf23f90cf51f1e47d572e8244ed2-10349474-images-thumbs&n=13",
        followed: true,
        fullName: "Nikita",
        status: "20 минут назад в сети",
        location: { city: "Vorkyta", country: "Russia" },
      },
      {
        id: 3,
        photoUrl:
          "https://avatars.mds.yandex.net/i?id=4aff8b776623cf23f90cf51f1e47d572e8244ed2-10349474-images-thumbs&n=13",
        followed: true,
        fullName: "Vitaly",
        status: "50 минут назад в сети",
        location: { city: "Ekat", country: "Russia" },
      },
      {
        id: 4,
        photoUrl:
          "https://avatars.mds.yandex.net/i?id=4aff8b776623cf23f90cf51f1e47d572e8244ed2-10349474-images-thumbs&n=13",
        followed: true,
        fullName: "Dmitry",
        status: "1 час назад в сети",
        location: { city: "Texas", country: "USA" },
      },
    ];

    props.setUsers(users); // Передаем users в функцию setUsers
  }

  return (
    <div>
      {props.users.map((users) => (
        <div key={users.id}>
          <span>
            <div>
              <img src={users.photoUrl} className={styles.userPhoto} />
            </div>
            <div>
              {users.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(users.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(users.id);
                  }}
                >
                  Follow
                </button>
              )}
              ;
            </div>
          </span>
          <span>
            <span>
              <div>{users.fullName}</div>
              <div>{users.status}</div>
            </span>
            <span>
              <div>{users.location.city}</div>
              <div>{users.location.country}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};
export default Users;

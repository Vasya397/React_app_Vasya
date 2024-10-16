import React from "react";
import userPhoto from "../../assets/images/user.jpg";
import styles from "./users.module.css";
import { NavLink } from "react-router-dom";
import axios from "axios";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map((page) => {
          return (
            <span
              key={page}
              className={props.currentPage === page ? styles.selectedPage : ""}
              onClick={(event) => {
                props.onPageChanged(page);
              }}
            >
              {page}
            </span>
          );
        })}
      </div>
      {props.users.map((users) => (
        <div key={users.id}>
          <span>
            <div>
              <NavLink to={"/profile/" + users.id}>
                <img
                  src={
                    users.photos.small != null ? users.photos.small : userPhoto
                  }
                  className={styles.userPhoto}
                />
              </NavLink>
            </div>
            <div>
              {users.followed ? (
                <button
                  onClick={() => {
                    axios
                      .delete(
                        `https://social-network.samuraijs.com/api/1.0/follow/${users.id}`,
                        {
                          withCredentails: true,
                          headers: {
                            "API-KEY": "b841f05f-bb99-41d5-8bce-031c2af790d2",
                          },
                        }
                      )
                      .then((response) => {
                        if (response.data.resultCode === 0) {
                          props.unfollow(users.id);
                        }
                      });
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    axios
                      .post(
                        `https://social-network.samuraijs.com/api/1.0/follow/=${users.id}`,
                        {},
                        {
                          withCredentails: true,
                          headers: {
                            "API-KEY": "b841f05f-bb99-41d5-8bce-031c2af790d2",
                          },
                        }
                      )
                      .then((response) => {
                        if (response.data.resultCode === 0) {
                          props.follow(users.id);
                        }
                      });
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
              <div>{users.name}</div>
              <div>{users.status}</div>
            </span>
            <span>
              <div>"users.location.city"</div>
              <div>"users.location.country"</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;

import React from "react";
import styles from "./users.module.css";
import axios from "axios";
import userPhoto from "../../assets/images/user.jpg";

class Users extends React.Component {
  getUsers = () => {
    if (this.props.users.length === 0) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((response) => {
          this.props.setUsers(response.data.items);
        })
        .catch((error) => {
          console.log("Error", error);
        });
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.getUsers}> Get Users </button>
        {this.props.users.map((users) => (
          <div key={users.id}>
            <span>
              <div>
                <img
                  src={
                    users.photos.small != null ? users.photos.small : userPhoto
                  }
                  className={styles.userPhoto}
                />
              </div>
              <div>
                {users.followed ? (
                  <button
                    onClick={() => {
                      this.props.unfollow(users.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.follow(users.id);
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
                <div>{users.location?.city}</div>
                <div>{users.location?.country}</div>
              </span>
            </span>
          </div>
        ))}
      </div>
    );
  }
}

export default Users;

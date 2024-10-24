import axios from "axios";
import { unfollow } from "../redux/users-reducer";

const baseUrl = "https://social-network.samuraijs.com/api/1.0/";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "b841f05f-bb99-41d5-8bce-031c2af790d2",
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(baseUrl + `users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
  follow(userId) {
    return instance.post(
      `https://social-network.samuraijs.com/api/1.0/follow/=${userId}`
    );
  },
  unfollow(userId) {
    return instance.delete(
      `https://social-network.samuraijs.com/api/1.0/follow/${userId}`
    );
  },
};

export const getUsers2 = (currentPage = 1, pageSize = 10) => {
  return instance
    .get(baseUrl + `follow?page=${currentPage}&count=${pageSize}`)
    .then((response) => {
      return response.data;
    });
};

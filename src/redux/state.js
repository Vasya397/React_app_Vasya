import { rerenderEntireTree } from "../render";

let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi, how are you?", likesCount: 20 },
      { id: 2, message: "It`s my first post", likesCount: 18 },
      { id: 3, message: "It`s my", likesCount: 9 },
      { id: 4, message: "It`s mynecraft", likesCount: 20 },
    ],
    newPostText: "lol-kek",
  },
  messagesPage: {
    messages: [
      { id: 1, message: "Hi" },
      { id: 2, message: "Che ti delaesh?" },
      { id: 3, message: "Ladno" },
    ],
    dialogs: [
      { id: 1, name: "Vasya" },
      { id: 2, name: "Vitaly" },
      { id: 3, name: "Sanya" },
      { id: 4, name: "Lexa" },
      { id: 5, name: "Misha" },
    ],
  },
};

export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: postMessage,
    likesCount: 0,
  };

  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state);
};

export default state;

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

export const posts = [
  { id: 1, message: "Hi, how are you?", likesCount: 20 },
  { id: 2, message: "It`s my first post", likesCount: 18 },
  { id: 3, message: "It`s my", likesCount: 9 },
  { id: 4, message: "It`s mynecraft", likesCount: 20 },
];

export const dialogs = [
  { id: 1, name: "Vasya" },
  { id: 2, name: "Vitaly" },
  { id: 3, name: "Sanya" },
  { id: 4, name: "Lexa" },
  { id: 5, name: "Misha" },
];

export const messages = [
  { id: 1, message: "Hi" },
  { id: 2, message: "Che ti delaesh?" },
  { id: 3, message: "Ladno" },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

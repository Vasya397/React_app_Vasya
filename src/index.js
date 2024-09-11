import React from "react";
import reportWebVitals from "./reportWebVitals";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { addPost, subscribe, updateNewPostText } from "./redux/state";
import { BrowserRouter } from "react-router-dom";
import state from "./redux/state";

let rerenderEntireTree = (state) => {
  const container = document.getElementById("root");
  const root = createRoot(container);

  root.render(
    <BrowserRouter>
      <App
        state={state}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
      />
    </BrowserRouter>
  );
};

rerenderEntireTree(state);

subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

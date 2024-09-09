import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { addPost } from "./redux/state";
import { BrowserRouter } from "react-router-dom";
import state from "./redux/state";

export let rerenderEntireTree = (state) => {
  const container = document.getElementById("root");
  const root = createRoot(container);

  root.render(
    <BrowserRouter>
      <App state={state} addPost={addPost} />
    </BrowserRouter>
  );
};

rerenderEntireTree(state);

import React from "react";
import reportWebVitals from "./reportWebVitals";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store";
import StoreContext, { Provider } from "./StoreContext";

let rerenderEntireTree = (state) => {
  const container = document.getElementById("root");
  const root = createRoot(container);

  root.render(
    <BrowserRouter>
      <Provider value={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
};

rerenderEntireTree(store.getState());

store.subscribe(() => {
  rerenderEntireTree(store.getState());
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

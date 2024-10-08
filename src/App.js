import "./App.css";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import News from "./components/News/News";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/dialogs" element={<DialogsContainer />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/news" element={<News />} />
          <Route path="/users" element={<UsersContainer />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;

import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={s.header}>
      <img src="https://avatars.mds.yandex.net/i?id=57ee67e9522ab04adcd810ca19b18018299189f3-9104160-images-thumbs&n=13"></img>
      <div className={s.loginBlock}>
        {props.isAuth ? (
          <div>
            {props.login} - <button onClick={props.logout}> Log out </button>
          </div>
        ) : (
          <NavLink to={"/login"}> Login </NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;

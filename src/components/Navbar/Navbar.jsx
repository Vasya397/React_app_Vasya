import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink
          to="/profile"
          className={({ isActive }) => (isActive ? s.activeLink : "")}
        >
          {" "}
          Profile{" "}
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/dialogs"
          className={({ isActive }) => (isActive ? s.activeLink : "")}
        >
          {" "}
          Messages{" "}
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/news"
          className={({ isActive }) => (isActive ? s.activeLink : "")}
        >
          {" "}
          New{" "}
        </NavLink>
      </div>
      <div className={s.item}>
        <a> Misuc </a>
      </div>
      <div className={s.item}>
        <a> Settings </a>
      </div>
    </nav>
  );
};

export default Navbar;

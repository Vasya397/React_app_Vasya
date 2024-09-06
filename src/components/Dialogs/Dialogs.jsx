import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog}>
      <NavLink to={path}> {props.name} </NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={s.dialog}> {props.message} </div>;
};

const Dialogs = (props) => {
  let dialogs = [
    { id: 1, name: "Vasya" },
    { id: 2, name: "Vitaly" },
    { id: 3, name: "Sanya" },
    { id: 4, name: "Lexa" },
    { id: 5, name: "Misha" },
  ];

  let messages = [
    { id: 1, message: "Hi" },
    { id: 2, message: "Che ti delaesh?" },
    { id: 3, message: "Ladno" },
  ];

  let dialogsElement = dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));
  let messagesElements = messages.map((message) => (
    <Message message={message.message} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElement}</div>
      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;

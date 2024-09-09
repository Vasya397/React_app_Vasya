import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/message";

const Dialogs = (props) => {
  let dialogsElement = props.dialogs.map((dialog) => (
    <DialogItem key={dialog.id} name={dialog.name} />
  ));
  let messagesElements = props.messages.map((message) => (
    <Message key={message.id} message={message.message} />
  ));

  let newMessElement = React.createRef();

  let addMessage = () => {
    let mess = newMessElement.current.value;
    alert(mess);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElement}</div>
      <div className={s.messages}>{messagesElements}</div>
      <div>
        <textarea ref={newMessElement}> </textarea>
        <button onClick={addMessage}> AddMessage </button>
      </div>
    </div>
  );
};

export default Dialogs;

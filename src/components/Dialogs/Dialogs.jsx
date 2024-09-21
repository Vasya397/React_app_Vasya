import React, { ChangeEventHandler } from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/message";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {
  let state = props.messagesPage;

  let dialogsElement = state.dialogs.map((dialog) => (
    <DialogItem key={dialog.id} name={dialog.name} />
  ));
  let messagesElements = state.messages.map((message) => (
    <Message key={message.id} message={message.message} />
  ));
  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
  };

  let onNewMessageChange = (event) => {
    let body = event.target.value;
    props.updateNewMessageBody(body);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElement}</div>
      <div className={s.messages}>
        <div> {messagesElements} </div>
        <div>
          <div>
            <textarea
              value={newMessageBody}
              onChange={onNewMessageChange}
              placeholder="Enter yor message"
            ></textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}> Send </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;

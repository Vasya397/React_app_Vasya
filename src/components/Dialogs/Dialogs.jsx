import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/message";
import { Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Dialogs = (props) => {
  let state = props.messagesPage;
  let dialogsElement = state?.dialogs?.map((dialog) => (
    <DialogItem key={dialog.id} name={dialog.name} />
  ));
  let messagesElements = state?.messages.map((message) => (
    <Message key={message.id} message={message.message} />
  ));
  let onSendMessageClick = (messageText) => {
    props.sendMessage(messageText);
  };

  if (!props.isAuth) return <Navigate to="/login" />;

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}> {dialogsElement} </div>
      <div className={s.messages}>
        <div> {messagesElements} </div>
        <AddMessageForm sendMessage={props.sendMessage} />
      </div>
    </div>
  );
};

const AddMessageForm = (props) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    props.sendMessage(data.message);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <textarea
        {...register("message", { required: true })}
        placeholder="Введите сообщение"
      ></textarea>
      <button type="submit">Отправить</button>
    </form>
  );
};

export default Dialogs;

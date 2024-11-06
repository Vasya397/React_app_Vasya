import React from "react";
import { useForm } from "react-hook-form";
import {
  isLatinAlphanumeric,
  maxLengthLog,
} from "../../utils/validators/validators";
import s from "./login.module.css";

const LoginForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          {...register("login", {
            required: "Логин обязателен",
            validate: { isLatinAlphanumeric, maxLengthLog },
          })}
          placeholder="Login"
        />
        {errors.login && <p>{errors.login.message}</p>}
      </div>
      <div>
        <input
          {...register("password", {
            required: "Пароль обязателен",
            validate: maxLengthLog,
          })}
          placeholder="Password"
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>
      <div>
        <input type="checkbox" {...register("rememberMe")} />
        remember me
      </div>
      <div>
        <button type="submit"> Login </button>
      </div>
    </form>
  );
};

const Login = () => {
  const handleFormSubmit = (data) => {
    console.log("Submitted data:", data);
  };

  return (
    <div>
      <h1> LOGIN </h1>
      <LoginForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default Login;

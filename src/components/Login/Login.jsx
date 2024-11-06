import React from "react";
import { useForm } from "react-hook-form";

const LoginForm = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input {...register("login", { required: true })} placeholder="Login" />
      </div>
      <div>
        <input
          {...register("password", { required: true })}
          placeholder="Password"
          type="password"
        />
      </div>
      <div>
        <input type="checkbox" {...register("rememberMe")} />
        remember me
      </div>
      <div>
        <textarea
          {...register("message", { required: true })}
          placeholder="Введите текст"
        />
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

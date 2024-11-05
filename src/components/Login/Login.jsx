import React from "react";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          {...register("login", { required: true })}
          name="login"
          placeholder="Login"
        />
      </div>
      <div>
        <input
          {...register("password", { required: true })}
          name="password"
          placeholder="Password"
          type="password"
        />
      </div>
      <div>
        <input type="checkbox" {...register("rememberMe")} name="rememberMe" />
        remember me
      </div>
      <div>
        <button type="submit"> Login </button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(ContactForm);

const Login = (props) => {
  return (
    <div>
      <h1> LOGIN </h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default Login;

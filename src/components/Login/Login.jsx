import React from "react";
import { useForm } from "react-hook-form";
import {
  isLatinAlphanumeric,
  maxLengthLog,
} from "../../utils/validators/validators";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Navigate } from "react-router-dom";

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
          {...register("email", {
            required: "Логин обязателен",
            validate: {
              isLatinAlphanumeric,
            },
          })}
          placeholder="Email"
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <div>
        <input
          {...register("password", {
            required: "Пароль обязателен",
            validate: maxLengthLog,
          })}
          placeholder="Password"
          type="password"
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

const Login = (props) => {
  const handleFormSubmit = (data) => {
    console.log("Submitted data:", data);
    props.login(data.email, data.password, data.rememberMe);
  };

  if (props.isAuth) {
    return <Navigate to={"/profile"} />;
  }

  return (
    <div>
      <h1> LOGIN </h1>
      <LoginForm onSubmit={handleFormSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});
export default connect(null, { login })(Login);

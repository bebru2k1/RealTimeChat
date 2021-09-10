import React from "react";
import "./Login.scss";
import SingleUserView from "../SingleUserView/SingleUserView";

function Login() {
  const dataUser = [
    {
      name: "Tony",
      img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      content: "Don’t cry because it’s over, smile because it happened",
    },
    {
      name: "Ozawa",
      img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      content: "You only live once, but if you do it right, once is enough",
    },
    {
      name: "Tokuda",
      img: "https://images.unsplash.com/photo-1565464027194-7957a2295fb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      content:
        "To live is the rarest thing in the world. Most people exist, that is all",
    },
  ];
  return (
    <div className="login">
      <div className="login__header">
        <p>APP CHAT - TYPESCRIPT</p>
      </div>
      <div className="login__container">
        <div className="login__container__left">
          {dataUser.map((data, index) => (
            <SingleUserView
              key={index}
              name={data.name}
              img={data.img}
              content={data.content}
              nth={index + 1}
            />
          ))}
        </div>
        <div className="login__container__right">
          <div className="login__container__right__header">
            <p className="login-opacity">Start For Free</p>
            <p className="login-fontsize30">Sign up to AURCHAT</p>
            <p className="login-opacity ">
              No account ? <span>SignUp</span>
            </p>
          </div>
          <form action="" className="login__container__right__form">
            <p className="login__container__right__form__emailtext">E-mail</p>
            <input
              type="text"
              placeholder="name@gmail.com"
              className="login__container__right__form__emailinput login__container__right__form__input"
            />
            <p className="login__container__right__form__passwordtext">
              Password
            </p>
            <input
              type="password"
              placeholder=""
              className="login__container__right__form__passwordinput login__container__right__form__input"
            />
            <div className="login__container__right__form__button">Sign In</div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

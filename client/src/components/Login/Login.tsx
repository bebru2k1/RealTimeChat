import React, { ChangeEvent, FormEvent, useState } from "react";
import { useHistory } from "react-router";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { authSelector, signin } from "../../features/AuthSlice";

interface LoginProps {
  setTypeSign: (value: "signin" | "signup") => void;
}
interface DataLogin {
  email: string;
  password: string;
}

function Login({ setTypeSign }: LoginProps) {
  const [dataForm, setDataForm] = useState<DataLogin>({
    email: "",
    password: "",
  });

  const { user, isAuthenticated } = useAppSelector(authSelector);

  const dispatch = useAppDispatch();

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(signin(dataForm));
  };
  const handleChangForm = (e: ChangeEvent<HTMLInputElement>) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value } as {
      [K in keyof DataLogin]: DataLogin[K];
    });
  };

  return (
    <div className="home__container__right">
      <div className="home__container__right__header">
        <p className="home-opacity">Start For Free</p>
        <p className="home-fontsize30">Sign up to AURCHAT</p>
        <p className="home-opacity ">
          No account ?{" "}
          <span
            className="home__container__right__header__signup"
            onClick={() => setTypeSign("signup")}
          >
            SignUp
          </span>
        </p>
      </div>
      <form
        action=""
        className="home__container__right__form"
        onSubmit={(e) => {
          handleSubmitForm(e);
        }}
      >
        <p className="home__container__right__form__emailtext">E-mail</p>
        <input
          onChange={(e) => handleChangForm(e)}
          value={dataForm.email}
          name="email"
          type="text"
          placeholder="name@gmail.com"
          className="home__container__right__form__emailinput home__container__right__form__input"
        />
        <p className="home__container__right__form__passwordtext">Password</p>
        <input
          onChange={(e) => handleChangForm(e)}
          value={dataForm.password}
          name="password"
          type="password"
          placeholder="6+ characters"
          className="home__container__right__form__passwordinput home__container__right__form__input"
        />
        <button type="submit" className="home__container__right__form__button">
          Sign In
        </button>
      </form>
    </div>
  );
}

export default Login;

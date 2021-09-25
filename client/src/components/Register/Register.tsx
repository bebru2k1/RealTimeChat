import React, { ChangeEvent, FormEvent, useState } from "react";

interface RegisterProps {
  setTypeSign: (value: "signin" | "signup") => void;
}
interface DataRegister {
  email: string;
  password: string;
  repassword: string;
}
function Register({ setTypeSign }: RegisterProps) {
  const [dataForm, setDataForm] = useState<DataRegister>({
    email: "",
    password: "",
    repassword: "",
  });
  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const handleChangForm = (e: ChangeEvent<HTMLInputElement>) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value } as {
      [K in keyof DataRegister]: DataRegister[K];
    });
  };
  console.log(dataForm);
  return (
    <div className="home__container__right">
      <div className="home__container__right__header">
        <p className="home-opacity">Start For Free</p>
        <p className="home-fontsize30">Sign up to AURCHAT</p>
        <p className="home-opacity ">
          You have account ?{" "}
          <span
            className="home__container__right__header__signup"
            onClick={() => setTypeSign("signin")}
          >
            SignIn
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
          type="password"
          name="password"
          placeholder="6+ characters"
          className="home__container__right__form__passwordinput home__container__right__form__input"
          value={dataForm.password}
        />
        <p className="home__container__right__form__passwordtext">Password</p>
        <input
          onChange={(e) => handleChangForm(e)}
          type="password"
          name="repassword"
          placeholder="6+ characters"
          className="home__container__right__form__passwordinput home__container__right__form__input"
          value={dataForm.repassword}
        />
        <button type="submit" className="home__container__right__form__button">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Register;

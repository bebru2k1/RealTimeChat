import React, { useState } from "react";
import "./Home.scss";
import SingleUserView from "../../components/SingleUserView/SingleUserView";
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";

function Home() {
  const [typeSign, setTypeSign] = useState<"signin" | "signup">("signin");
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
    <div className="home">
      <div className="home__header">
        <p>APP CHAT - TYPESCRIPT</p>
      </div>
      <div className="home__container">
        <div className="home__container__left">
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

        {typeSign === "signin" ? (
          <Login setTypeSign={setTypeSign} />
        ) : (
          <Register setTypeSign={setTypeSign} />
        )}
      </div>
    </div>
  );
}

export default Home;

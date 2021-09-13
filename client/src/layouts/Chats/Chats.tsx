import React, { FormEvent, useEffect, useState } from "react";
import "./Chats.scss";
import socket from "../../configs/socket";
import SingleUserMessage from "../../components/SingleUserMessage/SingleUserMessage";
import { dataUser } from "../../configs/data";
import ChatsMessage from "../../components/ChatsMessage/ChatsMessage";
import * as Icon from "react-feather";
import ChatsData from "../../components/ChatsData/ChatsData";

function Chats() {
  const [mess, setMess] = useState<{ id: string; message: string }[]>([]);
  const [message, setMessage] = useState<string>("");
  const [idSocket, setIdSocket] = useState<string>("");

  useEffect(() => {
    socket.on("connect", () => {
      console.log("connect Client success");
    });

    socket.on("getId", (id: string) => {
      setIdSocket(id);
    });

    socket.on("sentDataServer", (data) => {
      console.log(data);
      setMess((messageOld) => [...messageOld, data]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  console.log(mess);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (message === "") {
      return;
    }
    socket.emit("sentDataClient", {
      id: idSocket,
      message,
    });
  };

  const ID_USER_DEFAULT = 1;
  const [idUser, setIdUser] = useState(ID_USER_DEFAULT);
  const handleClick = (id: number): void => {
    setIdUser(id);
  };
  return (
    <div className="chats">
      <div className="chats__user">
        <div className="chats__user__header ">
          <div className="chats__user__header__left">
            <img
              src={"https://cdn-icons-png.flaticon.com/512/893/893268.png"}
              alt=""
              className="chats__user__header__left__icon"
            />
            <span>Chats</span>
          </div>
          <div className="chats__user__header__right">
            <img
              src={
                "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              }
              alt=""
              className="chats__user__header__right__image"
            />
          </div>
        </div>
        <div className="chats__user__container  bordergray">
          <img
            src={
              "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
            alt=""
            className="chats__user__container__image"
          />
          <p className="chats__user__container__username">Joshn</p>
          <p className="chats__user__container__content">Hi My Name Joshn</p>

          <div
            className="chats__user__container__setting boxed"
            style={{
              color: "rgb(52, 175, 236)",
              margin: "0 auto",
            }}
          >
            <Icon.Settings />
          </div>
        </div>
        <div className="chats__user__search">
          <input
            type="text"
            className="chats__user__search__input"
            placeholder="Search"
          />
        </div>
        <div className="chats__user__usermess ">
          <p className="chats__user__usermess__title">
            Friend Online{" "}
            <span
              className="boxed"
              style={{
                color: "rgb(0, 207, 69)",
                display: "inline-flex",
                fontSize: "1.4rem",
                width: "20px",
                height: "20px",
              }}
            >
              6
            </span>
          </p>

          {dataUser.map((data, index) => (
            <SingleUserMessage
              key={index}
              id={data.id}
              image={data.image}
              name={data.name}
              handleClick={handleClick}
              idUser={idUser}
              className="chats__user__usermess__singleuser"
            />
          ))}
        </div>
      </div>

      <ChatsMessage
        idUser={idUser}
        idSocket={idSocket}
        setMessage={setMessage}
        handleSubmit={handleSubmit}
        message={mess}
      />

      {/* <ChatsData id={idUser} className="chats__data" /> */}
    </div>
  );
}

export default Chats;

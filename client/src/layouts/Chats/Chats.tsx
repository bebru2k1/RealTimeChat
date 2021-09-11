import React, { useEffect, useState } from "react";
import "./Chats.scss";
import socket from "../../configs/socket";
import SingleUserMessage from "../../components/SingleUserMessage/SingleUserMessage";
import { dataUser } from "../../configs/data";
import ChatsMessage from "../../components/ChatsMessage/ChatsMessage";
import * as Icon from "react-feather";

function Chats() {
  // useEffect(() => {
  //   socket.on("connect", () => {
  //     socket.emit("add-friend", "Ahihi");
  //   });
  // }, []);
  console.log(dataUser);
  const ID_USER_DEFAULT = 1;
  const [idUser, setIdUser] = useState(ID_USER_DEFAULT);
  const handleClick = (id: number): void => {
    setIdUser(id);
  };
  return (
    <div className="chats">
      <div className="chats__user">
        <div className="chats__user__header bordergray">
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
        <div className="chats__user__container bordergray">
          <img
            src={
              "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
            alt=""
            className="chats__user__container__image"
          />
          <p className="chats__user__container__username">Joshn</p>
          <div
            className="chats__user__container__setting boxed"
            style={{ color: "rgb(52, 175, 236)", margin: "0 auto" }}
          >
            <Icon.Settings />
          </div>
        </div>
        <div className="chats__user__usermess bordergray">
          <p className="chats__user__usermess__title">Friend Online</p>
          {dataUser.map((data, index) => (
            <SingleUserMessage
              key={index}
              id={data.id}
              image={data.image}
              name={data.name}
              handleClick={handleClick}
              idUser={idUser}
            />
          ))}
        </div>
      </div>
      <div className="chats__message">
        <ChatsMessage id={idUser} />
      </div>
    </div>
  );
}

export default Chats;

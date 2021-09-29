import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import socket from "../../configs/socket";
import { dataUser } from "../../configs/data";
import "./ChatsMessage.scss";
import * as Icon from "react-feather";
import Message from "../Message/Message";

interface ChatsMessageProps {
  idUser: null | string;
}
function ChatsMessage({ idUser }: ChatsMessageProps) {
  const [message, setMess] = useState<{ id: string; message: string }[]>([]);
  const [idSocket, setIdSocket] = useState("");
  const [messageInput, setMessageInput] = useState("");
  //socket
  useEffect(() => {
    socket.on("connect", () => {
      console.log("connect client success");
    });

    socket.on("getId", (id: string) => {
      setIdSocket(id);
    });

    socket.on("sentDataServer", (data) => {
      setMess((messageOld) => [...messageOld, data]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (messageInput === "") {
      return;
    }
    socket.emit("sentDataClient", {
      id: idSocket,
      message: messageInput,
    });
    setMessageInput("");
  };

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setMessageInput(event.target.value);
  };

  if (!idUser) {
    return (
      <div className="chats__message">
        <div className="chats__message__background">
          <img
            src={"https://cdn-icons-png.flaticon.com/512/893/893268.png"}
            alt=""
            className="chats__message__background__image"
          />
          <p className="chats__message__background__text1">Send Message</p>
          <p className="chats__message__background__text2">
            Send photos and private messages to friends or groups
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="chats__message">
      <div className="chats__message__container">
        {message.map((mess, index) => (
          <Message
            key={index}
            own={mess.id === idSocket}
            message={mess.message}
          />
        ))}
      </div>

      <form
        className="chats__message__inputmess"
        onSubmit={(e) => handleSubmit(e)}
      >
        <Icon.Link className="chats__message__inputmess__link" />
        <input
          type="text"
          className="chats__message__inputmess__input"
          placeholder="Enter your message here"
          value={messageInput}
          onChange={(e) => handleChangeInput(e)}
        />
        <button type="submit" className="chats__message__inputmess__sendicon">
          <span className="chats__message__inputmess__sendicon__text">
            Send
          </span>
          <Icon.Send className="chats__message__inputmess__sendicon__icon" />
        </button>
      </form>
    </div>
  );
}

export default ChatsMessage;

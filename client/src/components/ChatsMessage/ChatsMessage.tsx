import React, { ChangeEvent, FormEvent } from "react";
import { dataUser } from "../../configs/data";
import "./ChatsMessage.scss";
import * as Icon from "react-feather";
import Message from "../Message/Message";
interface ChatsMessageProps {
  idUser: number;
  setMessage: (value: string) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  message: { id: string; message: string }[];
  idSocket: string;
}
function ChatsMessage({
  idUser,
  setMessage,
  handleSubmit,
  message,
  idSocket,
}: ChatsMessageProps) {
  const user = dataUser.filter((user) => user.id === idUser);
  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };
  return (
    <div className="chats__message">
      {message.map((mess) => (
        <Message own={mess.id === idSocket} message={mess.message} />
      ))}

      <form
        className="chats__message__inputmess"
        onSubmit={(e) => handleSubmit(e)}
      >
        <Icon.Link className="chats__message__inputmess__link" />
        <input
          type="text"
          className="chats__message__inputmess__input"
          placeholder="Enter your message here"
          onChange={(e: ChangeEvent<HTMLInputElement>): void =>
            handleChangeInput(e)
          }
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

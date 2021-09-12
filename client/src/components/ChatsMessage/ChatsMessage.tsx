import React from "react";
import { dataUser } from "../../configs/data";
import "./ChatsMessage.scss";
import * as Icon from "react-feather";
import Message from "../Message/Message";
interface ChatsMessageProps {
  id: number;
}
function ChatsMessage({ id }: ChatsMessageProps) {
  const user = dataUser.filter((user) => user.id === id);
  return (
    <div className="chats__message">
      <Message own={false} />
      <Message own={true} />
      <Message own={false} />
      <Message own={true} />
      <Message own={false} />
      <Message own={true} />

      <div className="chats__message__inputmess">
        <Icon.Link className="chats__message__inputmess__link" />
        <input
          type="text"
          className="chats__message__inputmess__input"
          placeholder="Enter your message here"
        />
        <div className="chats__message__inputmess__sendicon">
          <span className="chats__message__inputmess__sendicon__text">
            Send
          </span>
          <Icon.Send className="chats__message__inputmess__sendicon__icon" />
        </div>
      </div>
    </div>
  );
}

export default ChatsMessage;

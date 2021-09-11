import React from "react";
import { dataUser } from "../../configs/data";
import "./ChatsMessage.scss";
import * as Icon from "react-feather";
interface ChatsMessageProps {
  id: number;
}
function ChatsMessage({ id }: ChatsMessageProps) {
  const user = dataUser.filter((user) => user.id === id);
  return (
    <div className="chatmessage">
      <div className="chatmessage__header bordergray">
        <div className="chatmessage__header__image">
          <img src={user[0].image} alt="" />
        </div>
        <div className="chatmessage__header__name">{user[0].name}</div>
      </div>
      <div className="chatmessage__content"></div>
      <div className="chatmessage__feature">
        <Icon.Link />
        <Icon.Image />
      </div>
      <div className="chatmessage__inputmess">
        <input type="text" />
      </div>
    </div>
  );
}

export default ChatsMessage;

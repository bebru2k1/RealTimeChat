import React from "react";
import { useAppSelector } from "../../app/hooks";
import { authSelector } from "../../features/AuthSlice";
import "./Message.scss";
interface MessageProps {
  own: boolean;
  message: string;
}
function Message({ own, message }: MessageProps) {
  console.log(message);
  const { user } = useAppSelector(authSelector);
  return (
    <div className={own ? `message own` : "message"}>
      <div className="message__user">
        <img src={user?.image} alt="" className="message__user__image" />
      </div>
      <div className="message__message">
        <div className="message__message__content">{message}</div>
        <div className="message__message__time">1 year ago</div>
      </div>
    </div>
  );
}

export default Message;

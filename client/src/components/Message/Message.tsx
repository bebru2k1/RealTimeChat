import React from "react";
import { useAppSelector } from "../../app/hooks";
import { authSelector, User } from "../../features/AuthSlice";
import "./Message.scss";
interface MessageProps {
  // own: boolean;
  message: string;
  sender: User;
}
function Message({ message, sender }: MessageProps) {
  const { user } = useAppSelector(authSelector);
  const own = sender.email === user?.email;
  return (
    <div className={own ? `message own` : "message"}>
      <div className="message__user">
        <img src={sender?.image} alt="" className="message__user__image" />
      </div>
      <div className="message__message">
        <div className="message__message__content">{message}</div>
        <div className="message__message__time">1 year ago</div>
      </div>
    </div>
  );
}

export default Message;

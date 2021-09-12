import React from "react";
import "./Message.scss";
interface MessageProps {
  own: boolean;
}
function Message({ own }: MessageProps) {
  return (
    <div className={own ? `message own` : "message"}>
      <div className="message__user">
        <img
          src={
            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          }
          alt=""
          className="message__user__image"
        />
      </div>
      <div className="message__message">
        <div className="message__message__content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
        <div className="message__message__time">1 year ago</div>
      </div>
    </div>
  );
}

export default Message;

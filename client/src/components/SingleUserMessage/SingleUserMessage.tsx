import React, { useState } from "react";
import ButtonCreateConv from "../ButtonCreateConv/ButtonCreateConv";
import "./SingleUserMessage.scss";

interface SingleUserMessageProps {
  image: string;
  name: string;
  className?: string;
  idConv: string;
  handleClick: (id: string) => void;
  idConvCurrent: string;
}

function SingleUserMessage({
  idConv,
  image,
  name,
  className = "",
  handleClick,
  idConvCurrent,
}: // handleClick,
// idUser,
SingleUserMessageProps) {
  const [sended, setSended] = useState(false);
  return (
    <div
      className={
        idConvCurrent === idConv
          ? `${className} usermessage active`
          : `${className} usermessage`
      }
      onClick={() => {
        if (handleClick) {
          handleClick(idConv);
        }
        setSended(true);
      }}
    >
      <div className="usermessage__left">
        <img src={image} alt="" className="usermessage__left__image" />
      </div>
      <div className="usermessage__right">
        <p className="usermessage__right__name">{name}</p>
      </div>
      <div></div>
      {/* <div className="usermessage__number">{!sended && "New"}</div> */}
    </div>
  );
}

export default SingleUserMessage;

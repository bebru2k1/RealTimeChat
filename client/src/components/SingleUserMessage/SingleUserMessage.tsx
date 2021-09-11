import React, { useState } from "react";
import "./SingleUserMessage.scss";

interface SingleUserMessageProps {
  id: number;
  image: string;
  name: string;
  className?: string;
  handleClick(id: number): void;
  idUser: number;
}

function SingleUserMessage({
  id,
  image,
  name,
  className = "",
  handleClick,
  idUser,
}: SingleUserMessageProps) {
  return (
    <div
      className={
        idUser === id
          ? `${className} usermessage active`
          : `${className} usermessage`
      }
      onClick={() => handleClick(id)}
    >
      <div className="usermessage__left">
        <img src={image} alt="" className="usermessage__left__image" />
      </div>
      <div className="usermessage__right">
        <p className="usermessage__right__name">{name}</p>
        <p className="usermessage__right__message">
          Lorem ipsum dolor sit amet
        </p>
      </div>
    </div>
  );
}

export default SingleUserMessage;

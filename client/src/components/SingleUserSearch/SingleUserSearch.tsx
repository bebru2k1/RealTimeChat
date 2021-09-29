import React from "react";
import "../SingleUserMessage/SingleUserMessage.scss";
import "./SingleUserSearch.scss";
import ButtonCreateConv from "../ButtonCreateConv/ButtonCreateConv";
interface SingleUserSearchProps {
  image: string;
  email: string;
}
function SingleUserSearch({ image, email }: SingleUserSearchProps) {
  return (
    <div className="usermessage">
      <div className="usermessage__left">
        <img src={image} alt="" className="usermessage__left__image" />
      </div>
      <div className="usermessage__right">
        <p className="usermessage__right__name">{email}</p>
      </div>
      <ButtonCreateConv className="usermessage__btn" />
    </div>
  );
}

export default SingleUserSearch;

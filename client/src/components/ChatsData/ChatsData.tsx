import React from "react";
import { dataUser } from "../../configs/data";
import "./ChatsData.scss";
interface ChatsDataProps {
  id: number;
  className?: string;
}

function ChatsData({ id, className = "" }: ChatsDataProps) {
  const user = dataUser.filter((user) => user.id === id);

  return (
    <div className={`${className}`}>
      <div className="chats__data__info bordergray">
        <img src={user[0].image} alt="" className="chats__data__info__image" />
        <p className="chats__data__info__gmail">{user[0].gmail}</p>

        <p className="chats__data__info__username">{user[0].name}</p>
      </div>
      <div className="chats__data__olddata">
        {/* <span className="chats__data__olddata__title">Shared Images</span> */}
        <div className="chats__data__olddata__oldimage">
          <img
            src={
              "https://images.unsplash.com/photo-1631352564893-362c269def51?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            }
            alt=""
            className="chats__data__olddata__oldimage__image"
          />
        </div>
        <div className="chats__data__olddata__oldimage">
          <img
            src={
              "https://images.unsplash.com/photo-1631352564893-362c269def51?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            }
            alt=""
            className="chats__data__olddata__oldimage__image"
          />
        </div>
        <div className="chats__data__olddata__oldimage">
          <img
            src={
              "https://images.unsplash.com/photo-1631352564893-362c269def51?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            }
            alt=""
            className="chats__data__olddata__oldimage__image"
          />
        </div>
        <div className="chats__data__olddata__oldimage">
          <img
            src={
              "https://images.unsplash.com/photo-1631352564893-362c269def51?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            }
            alt=""
            className="chats__data__olddata__oldimage__image"
          />
        </div>
      </div>
    </div>
  );
}

export default ChatsData;

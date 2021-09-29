import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { authSelector } from "../../features/AuthSlice";
import { createConv } from "../../features/ConversationSlice";
import "./ButtonCreateConv.scss";
interface ButtonCreateConvProps {
  className?: string;
}
function ButtonCreateConv({ className = "" }: ButtonCreateConvProps) {
  //redux hooks
  const { user, dataGetUser } = useAppSelector(authSelector);
  const dispatch = useAppDispatch();
  const handleClickBtnConv = (members: string[]) => {
    dispatch(createConv({ members }));
  };

  return (
    <div
      className={`btncreateconv ${className}`}
      onClick={() =>
        handleClickBtnConv([user?._id, dataGetUser?._id] as string[])
      }
    >
      <span>Connect</span>
    </div>
  );
}

export default ButtonCreateConv;

import React from "react";
import Typing from "../Common/Typing";
import "./SingleUserView.scss";

interface SingleUserViewProps {
  img: string;
  name: string;
  content: string;
  nth: number;
}
function SingleUserView({ img, name, content, nth }: SingleUserViewProps) {
  return (
    <div className="singleuserview">
      <div className="userview">
        <div className="userview__img">
          <img src={img} alt="" />
        </div>
        <p className="userview__name">{name}</p>
      </div>
      <div className="usercontent">
        <Typing classNames={[""]} content={[content]} nth={nth} />
      </div>
    </div>
  );
}

export default SingleUserView;

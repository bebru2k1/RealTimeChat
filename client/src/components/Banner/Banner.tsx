import React from "react";
import "./Banner.scss";
import * as Icon from "react-feather";
function Banner() {
  return (
    <div className="banner">
      <div className="banner__header">
        <p className="banner__header__left">
          <p className="banner__header__left__title">Aurchat</p>
          <p className="banner__header__left__content">Why choose App-Chat</p>
        </p>
        <p className="banner__header__right">
          Please choose App - Chat for the following special features. Let's
          experience it as quickly as possible
        </p>
      </div>
      <ul className="banner__container">
        <li className="banner__container__item">
          <img
            className="banner__container__item__icon"
            src={"https://image.flaticon.com/icons/png/512/2950/2950711.png"}
            alt=""
          />
          <span>Fast Mess</span>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam
            quis quaerat perferendis, beatae qui nesciunt et temporibus quisquam
            consectetur repellendus eveniet libero esse quo accusantium? Quas
            quibusdam unde quae. Nam!
          </p>
        </li>
        <li className="banner__container__item">
          <img
            className="banner__container__item__icon"
            src={"https://image.flaticon.com/icons/png/512/1042/1042390.png"}
            alt=""
          />
          <span>Fast Video</span>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam
            quis quaerat perferendis, beatae qui nesciunt et temporibus quisquam
            consectetur repellendus eveniet libero esse quo accusantium? Quas
            quibusdam unde quae. Nam!
          </p>
        </li>
        <li className="banner__container__item">
          <img
            className="banner__container__item__icon"
            src={"https://image.flaticon.com/icons/png/512/3220/3220788.png"}
            alt=""
          />
          <span>Fast Video</span>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam
            quis quaerat perferendis, beatae qui nesciunt et temporibus quisquam
            consectetur repellendus eveniet libero esse quo accusantium? Quas
            quibusdam unde quae. Nam!
          </p>
          rm -fr www/.git        </li>
      </ul>
    </div>
  );
}

export default Banner;

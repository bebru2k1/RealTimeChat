import React, {
  FormEvent,
  useEffect,
  useState,
  useCallback,
  useRef,
} from "react";
import "./Chats.scss";

import SingleUserMessage from "../../components/SingleUserMessage/SingleUserMessage";
import { dataUser } from "../../configs/data";
import ChatsMessage from "../../components/ChatsMessage/ChatsMessage";
import * as Icon from "react-feather";
import ChatsData from "../../components/ChatsData/ChatsData";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  authSelector,
  getUser,
  setNullDataGetUser,
  User,
} from "../../features/AuthSlice";
import SingleUserSearch from "../../components/SingleUserSearch/SingleUserSearch";
import {
  conversationSelector,
  findConv,
} from "../../features/ConversationSlice";
import SpinnerCricle from "../../components/SpinnerCricle/SpinnerCricle";

function Chats() {
  //Redux Hooks
  const dispatch = useAppDispatch();
  const { user, dataGetUser } = useAppSelector(authSelector);
  const { converLoading, conversationData } =
    useAppSelector(conversationSelector);

  //State mess
  const ID_CONV_DEFAULT = null;

  const [idConversation, setIdConversation] = useState<null | string>(
    ID_CONV_DEFAULT
  );

  const debounce = useRef<any>(null);
  //Search
  const [searchValue, setSearchValue] = useState("");
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valueSearch = e.target.value;
    setSearchValue(e.target.value);

    dispatch(setNullDataGetUser(null));

    //Debounce search
    if (debounce.current) {
      clearTimeout(debounce.current);
    }

    debounce.current = setTimeout(() => {
      if (valueSearch !== "") {
        dispatch(getUser(valueSearch));
      }
    }, 500);
  };

  //handleMember
  const memberNotUser = (members: User[]): User => {
    const result = members.filter((member) => member.email !== user?.email);
    return result[0];
  };

  //Convertion
  useEffect(() => {
    dispatch(findConv());
  }, []);

  const handleClick = (id: string): void => {
    setIdConversation(id);
  };
  return (
    <div className="chats">
      <div className="chats__user">
        <div className="chats__user__header ">
          <Link to="/" className="chats__user__header__left">
            <img
              src={"https://cdn-icons-png.flaticon.com/512/893/893268.png"}
              alt=""
              className="chats__user__header__left__icon"
            />
            <span>Chats</span>
          </Link>
          <div className="chats__user__header__right">
            <img
              src={user?.image}
              alt=""
              className="chats__user__header__right__image"
            />
          </div>
        </div>
        <div className="chats__user__container  bordergray">
          <img
            src={user?.image}
            alt=""
            className="chats__user__container__image"
          />
          <p className="chats__user__container__username">{user?.email}</p>
          <p className="chats__user__container__content">{`Hi My Name ${user?.email}`}</p>

          <div
            className="chats__user__container__setting boxed"
            style={{
              color: "rgb(52, 175, 236)",
              margin: "0 auto",
            }}
          >
            <Icon.Settings />
          </div>
        </div>
        <div className="chats__user__search">
          <input
            type="text"
            className="chats__user__search__input"
            placeholder="Search"
            value={searchValue}
            onChange={handleSearch}
          />
        </div>
        {dataGetUser && (
          <SingleUserSearch
            image={(dataGetUser as User)?.image}
            email={(dataGetUser as User)?.email}
          />
        )}

        <div className="chats__user__usermess ">
          <p className="chats__user__usermess__title">
            Friend Connected{" "}
            <span
              className="boxed"
              style={{
                color: "rgb(0, 207, 69)",
                display: "inline-flex",
                fontSize: "1.4rem",
                width: "20px",
                height: "20px",
              }}
            >
              6
            </span>
          </p>

          {converLoading ? <SpinnerCricle /> : null}
          {conversationData?.map(({ _id, members, messages }, index) => (
            <SingleUserMessage
              idConvCurrent={idConversation as string}
              key={index}
              image={memberNotUser(members).image} // 1 là index của user khác k phải mình
              name={memberNotUser(members).email}
              handleClick={handleClick}
              idConv={_id}
              className="chats__user__usermess__singleuser"
            />
          ))}
        </div>
      </div>

      <ChatsMessage idUser={idConversation} />

      {/* <ChatsData id={idUser} className="chats__data" /> */}
    </div>
  );
}

export default Chats;

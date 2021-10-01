import React, {
  ChangeEvent,
  FormEvent,
  useEffect,
  useState,
  KeyboardEvent,
} from "react";
import socket from "../../configs/socket";
import { dataUser } from "../../configs/data";
import "./ChatsMessage.scss";
import * as Icon from "react-feather";
import Message from "../Message/Message";
import { useAppSelector } from "../../app/hooks";
import { authSelector, User } from "../../features/AuthSlice";
import { toast } from "react-toastify";

interface ChatsMessageProps {
  idUser: null | string;
  idConversation: null | string;
}
function ChatsMessage({ idUser, idConversation }: ChatsMessageProps) {
  //Interface
  interface Message {
    idConv: string;
    message: string;
    sender: User;
  }
  //Redux Hooks
  const { user } = useAppSelector(authSelector);
  const [message, setMess] = useState<Message[]>([]);
  const [entering, setEntering] = useState(false);
  const [messageInput, setMessageInput] = useState("");
  const [senderTyping, setSenderTyping] = useState<null | User>(null);
  //socket
  useEffect(() => {
    socket.on("connect", () => {
      console.log("connect client success");
    });

    socket.on("SEND_MESS_SERVER", (message: Message) => {
      if (message?.sender.email !== user?.email) {
        toast.info(`${message.sender.email} sended message`, {
          icon: "🚀",
        });
      }
      setMess((mess) => [...mess, message]);
    });

    socket.on(
      "TYPING_MESS",
      (data: { sender: User; idConversation: string }) => {
        setEntering(true);
        setSenderTyping(data.sender);
      }
    );

    socket.on("NOT_TYPING_MESS", (data) => {
      setEntering(false);
      setSenderTyping(null);
    });

    return () => {
      socket.disconnect();
    };
  }, []);
  //handle join room

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (messageInput === "") {
      return;
    }

    socket.emit("SEND_MESS_CLIENT", {
      idConv: idConversation,
      message: messageInput,
      sender: user,
    });

    socket.emit("NOT_TYPING", { sender: user, idConversation });
    setSenderTyping(null);
    setMessageInput("");
  };

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setMessageInput(event.target.value);
  };
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    socket.emit("TYPING", { sender: user, idConversation });
  };

  if (messageInput === "") {
    socket.emit("NOT_TYPING", { sender: user, idConversation });
  }

  const messageOfConv = (message: Message[], idConversation: string | null) => {
    if (idConversation) {
      return message.filter((mess) => mess.idConv === idConversation);
    }
  };

  if (!idUser) {
    return (
      <div className="chats__message">
        <div className="chats__message__background">
          <img
            src={"https://cdn-icons-png.flaticon.com/512/893/893268.png"}
            alt=""
            className="chats__message__background__image"
          />
          <p className="chats__message__background__text1">Send Message</p>
          <p className="chats__message__background__text2">
            Send photos and private messages to friends or groups
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="chats__message">
      <div className="chats__message__container">
        {messageOfConv(message, idConversation)?.map((mess, index) => (
          <Message key={index} sender={mess.sender} message={mess.message} />
        ))}
        {senderTyping && (
          <Message sender={senderTyping!} message="Đang nhập ..." />
        )}
      </div>

      <form
        className="chats__message__inputmess"
        onSubmit={(e) => handleSubmit(e)}
      >
        <Icon.Link className="chats__message__inputmess__link" />
        <input
          type="text"
          className="chats__message__inputmess__input"
          placeholder="Enter your message here"
          value={messageInput}
          onChange={(e) => handleChangeInput(e)}
          onKeyDown={handleKeyDown}
        />
        <button type="submit" className="chats__message__inputmess__sendicon">
          <span className="chats__message__inputmess__sendicon__text">
            Send
          </span>
          <Icon.Send className="chats__message__inputmess__sendicon__icon" />
        </button>
      </form>
    </div>
  );
}

export default ChatsMessage;

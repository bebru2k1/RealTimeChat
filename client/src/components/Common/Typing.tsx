import React, { useEffect, useState, useCallback } from "react";

interface TypingProps {
  classNames: Array<string>;
  content: Array<string>;
  speed?: number;
  classNameCpn?: string;
  nth?: number;
}
function Typing({
  classNames,
  content,
  speed = 150,
  classNameCpn = "",
  nth = 1,
}: TypingProps) {
  // console.log(content[0].length * 2 * speed);
  const [text, setText] = useState("");
  const [loop, setLoop] = useState(1);
  const [isDelete, setIsDelete] = useState(false);
  const [isLoopOneRound, setIsLoopOneRound] = useState(false);
  const [isActionDelete, setIsActionDelete] = useState(false);
  const [indexContent, setIndexContent] = useState(0);

  const handleIndex = useCallback((min, max, number) => {
    if (number >= max) number = min;
    return number;
  }, []);

  const typing = useCallback(
    (title: string): void => {
      setIsLoopOneRound(false);
      if (loop === title.length) {
        setIsDelete(true);
        setIsActionDelete(true);
      }
      if (loop === 1) {
        setIsDelete(false);
        setIsActionDelete(false);
        if (isActionDelete) {
          setIsLoopOneRound(true);
        }
      }
      if (isLoopOneRound) {
        setIndexContent((index) => handleIndex(0, content.length, index + 1));
      }
      isDelete
        ? setLoop((oldValue) => oldValue - 1)
        : setLoop((oldValue) => oldValue + 1);

      setText(title?.substring(0, loop));
    },
    [
      content.length,
      handleIndex,
      isActionDelete,
      isDelete,
      isLoopOneRound,
      loop,
    ]
  );

  useEffect(() => {
    const timer = setInterval(() => typing(content[indexContent]), speed);
    return () => clearInterval(timer);
  }, [typing, content, speed, indexContent]);

  return (
    <span className={`${classNames[indexContent]} ${classNameCpn}`}>
      {text}
    </span>
  );
}

export default Typing;

import { useState, useEffect } from "react";
import { Wrapper } from "./Messages.styled";
import { Message } from "./Message";
import { useChatCtx } from "../../store/ChatCtx";
import { db } from "../../firebase";
import { doc } from "firebase/firestore";
import { onSnapshot } from "firebase/firestore";

export const Messages = () => {
  const [messages, setMessages] = useState<any>([]);
  const { chatId }: any = useChatCtx();
  useEffect(() => {
    //here we are getting undefined
    const unSub = onSnapshot(doc(db, "chats", chatId), (doc: any) => {
      setMessages([...doc.data().messages]);
    });
    return unSub;
  }, [chatId]);
  return (
    <Wrapper>
      {messages.map((message: any) => {
        return <Message key={message.id} {...message} />;
      })}
    </Wrapper>
  );
};

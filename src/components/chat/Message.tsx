import { useEffect, useState } from "react";
import { useChatCtx } from "../../store/ChatCtx";
import { db } from "../../firebase";
import { doc, onSnapshot } from "firebase/firestore";

export const Message = () => {
  const [messages, setMessages] = useState([]);
  const { chatId, chatUser }: any = useChatCtx();

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", chatId), (snapshot) => {
      console.log(snapshot);
    });
    return unSub;
  }, []);

  return <div>Message</div>;
};

import { useState } from "react";
import { createContext, useContext } from "react";
import { ChildrenProp } from "./Context.types";
import { useAuthCtx } from "./AuthCtx";

const ChatContext = createContext({});

export const ChatProvider = ({ children }: ChildrenProp) => {
  const { currentUser }: any = useAuthCtx();
  const [chatUser, setChatUser] = useState<any>("");
  const [chatId] = useState(() => {
    if (chatUser) {
      const concatinatedId =
        currentUser.uid > chatUser.uid
          ? currentUser.uid + chatUser.uid
          : chatUser.uid + currentUser.uid;
      return concatinatedId;
    }
  });
  return (
    <ChatContext.Provider value={{ chatUser, setChatUser, chatId }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChatCtx = () => {
  return useContext(ChatContext);
};

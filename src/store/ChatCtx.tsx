import { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import { ChildrenProp } from "./Context.types";
import { useAuthCtx } from "./AuthCtx";

const ChatContext = createContext({});

export const ChatProvider = ({ children }: ChildrenProp) => {
  const [chatUser, setChatUser] = useState<any>("");
  const [chatId, setChatId] = useState();

  return (
    <ChatContext.Provider value={{ setChatId, chatUser, setChatUser, chatId }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChatCtx = () => {
  return useContext(ChatContext);
};

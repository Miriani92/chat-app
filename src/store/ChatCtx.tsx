import { useState } from "react";
import { createContext, useContext } from "react";
import { ChildrenProp } from "./Context.types";

const ChatContext = createContext({});

export const ChatProvider = ({ children }: ChildrenProp) => {
  const [chatUser, setChatUser] = useState();
  console.log("chatUser is:", chatUser);
  return (
    <ChatContext.Provider value={{ chatUser, setChatUser }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChatCtx = () => {
  return useContext(ChatContext);
};

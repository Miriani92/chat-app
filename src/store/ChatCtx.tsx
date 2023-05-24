import { createContext, useContext } from "react";
import { ChildrenProp } from "./Context.types";

const ChatContext = createContext({});

export const ChatProvider = ({ children }: ChildrenProp) => {
  return (
    <ChatContext.Provider value={{ val: "chat" }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChatCtx = () => {
  return useContext(ChatContext);
};

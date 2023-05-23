import { createContext } from "react";
import { ChildrenProp } from "./Context.types";

export const ChatContext = createContext({});

export const ChatProvider = ({ children }: ChildrenProp) => {
  return (
    <ChatContext.Provider value={{ val: "chat" }}>
      {children}
    </ChatContext.Provider>
  );
};

import { useState, useEffect } from "react";
import { Wrapper } from "./Chat.styled";
import { ChatUserNavbar } from "./ChatUserNavbar";
import { useChatCtx } from "../../store/ChatCtx";

export const Chat = () => {
  const { chatUser }: any = useChatCtx();
  // create component that diplays empty chat if chatUser is not selected

  return (
    <Wrapper>
      <ChatUserNavbar chatUser={chatUser} />
    </Wrapper>
  );
};

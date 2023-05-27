import React from "react";
import { Wrapper } from "./ChatUserNavbar.styled";
import { useChatCtx } from "../../store/ChatCtx";
import { Img } from "../sidebar/NavBar.styles";

export const ChatUserNavbar = ({ chatUser }: any) => {
  console.log("__ChatUserNabar_chatUser:", chatUser);
  return (
    <Wrapper>
      <div style={{ display: "flex" }}>
        <Img src={chatUser?.photoUrl} />
        <h4>{chatUser?.name}</h4>
      </div>
      <div></div>
    </Wrapper>
  );
};

import React from "react";
import { Wrapper } from "./Message.styled";
export const Message: React.FC<any> = ({ message }) => {
  if (!message) {
    return <h3>No messages</h3>;
  }
  return (
    <Wrapper>
      {message.message ? <p>{message.message}</p> : <img src={message.image} />}
    </Wrapper>
  );
};

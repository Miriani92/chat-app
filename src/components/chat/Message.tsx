import React from "react";
import { Wrapper } from "./Message.styled";
export const Message: React.FC<any> = ({ id, message, image, sender }) => {
  return (
    <Wrapper>
      {/* {message ? <p>{message}</p> : <img src={image} />} */}
    </Wrapper>
  );
};

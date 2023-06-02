import React from "react";
import { Wrapper, ImageWrapper, UserImage } from "./Message.styled";
import { useAuthCtx } from "../../store/AuthCtx";
import { useChatCtx } from "../../store/ChatCtx";

export const Message: React.FC<any> = ({ message }) => {
  const { currentUser }: any = useAuthCtx();
  const { chatUser }: any = useChatCtx();

  if (!message) {
    return <h3>No messages</h3>;
  }

  return (
    <Wrapper $alignSelfRight={currentUser.uid === message.sender}>
      {message.message ? (
        <p>{message.message}</p>
      ) : (
        <ImageWrapper src={message.image} />
      )}
      <UserImage
        src={
          message.sender === currentUser.uid
            ? currentUser.photoURL
            : chatUser.photoUrl
        }
      />
    </Wrapper>
  );
};

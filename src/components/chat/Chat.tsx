import { Wrapper } from "./Chat.styled";
import { ChatUserNavbar } from "./ChatUserNavbar";
import { useChatCtx } from "../../store/ChatCtx";
import { ChatInput } from "./ChatInput";
import { ChatDisplay } from "./ChatDisplay";

export const Chat = () => {
  const { chatUser }: any = useChatCtx();

  return (
    <Wrapper>
      {!chatUser ? (
        <h3
          style={{
            textAlign: "center",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          Click on the User to start the chat
        </h3>
      ) : (
        <Wrapper>
          <ChatUserNavbar chatUser={chatUser} />
          <ChatDisplay />
          <ChatInput />
        </Wrapper>
      )}
    </Wrapper>
  );
};

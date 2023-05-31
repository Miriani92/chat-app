import { Wrapper, Input, LeftSideWrapper } from "./ChatInput.styled";
import { Button } from "../shared/Button";
import { IoMdAttach } from "react-icons/io";

export const ChatInput = () => {
  return (
    <Wrapper>
      <Input />
      <LeftSideWrapper>
        <IoMdAttach style={{ fontSize: 24 }} />
        <Button width={50} height={30} color="grey">
          Send
        </Button>
      </LeftSideWrapper>
    </Wrapper>
  );
};

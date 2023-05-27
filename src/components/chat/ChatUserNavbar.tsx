import { Wrapper, IconsWrapper } from "./ChatUserNavbar.styled";
import { Img } from "../sidebar/NavBar.styles";
import {
  BsCameraVideo,
  BsFillPersonFill,
  BsChatDotsFill,
} from "react-icons/bs";

export const ChatUserNavbar = ({ chatUser }: any) => {
  return (
    <Wrapper>
      <div style={{ display: "flex" }}>
        <Img src={chatUser?.photoUrl} />
        <h4>{chatUser?.name}</h4>
      </div>
      <IconsWrapper>
        <BsCameraVideo />
        <BsFillPersonFill />
        <BsChatDotsFill />
      </IconsWrapper>
    </Wrapper>
  );
};

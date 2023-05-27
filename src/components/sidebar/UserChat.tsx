import { useChatCtx } from "../../store/ChatCtx";
import { Wrapper } from "./UserChat.styled";
import { Img } from "./NavBar.styles";

export const UserChat = (props: any) => {
  const { setChatUser }: any = useChatCtx();

  const { name, photoUrl } = props;
  const handleClickChatUser = () => {
    setChatUser(props);
  };
  return (
    <Wrapper onClick={handleClickChatUser}>
      <Img src={photoUrl} />
      <h4>{name}</h4>
    </Wrapper>
  );
};

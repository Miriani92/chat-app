import { useChatCtx } from "../../store/ChatCtx";
import { Wrapper } from "./UserChat.styled";
import { Img } from "./NavBar.styles";
import { useAuthCtx } from "../../store/AuthCtx";

export const UserChat = (props: any) => {
  const { setChatUser, setChatId }: any = useChatCtx();
  const { currentUser }: any = useAuthCtx();

  const { name, photoUrl } = props;
  const handleClickChatUser = () => {
    const concatinatedId =
      currentUser.uid > props.uid
        ? currentUser.uid + props.uid
        : props.uid + currentUser.uid;
    setChatId(concatinatedId);
    setChatUser(props);
  };
  return (
    <Wrapper onClick={handleClickChatUser}>
      <Img src={photoUrl} />
      <h4>{name}</h4>
    </Wrapper>
  );
};

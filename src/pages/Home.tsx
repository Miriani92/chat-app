import { Wrapper } from "./Home.styled";
import { SideBar } from "../components/sidebar/Sidebar";
import { Chat } from "../components/chat/Chat";

export const Home = () => {
  return (
    <Wrapper>
      <SideBar />
      <Chat />
    </Wrapper>
  );
};

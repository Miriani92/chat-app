import { useEffect, useState } from "react";
import { onSnapshot, doc } from "firebase/firestore";
import { useAuthCtx } from "../../store/AuthCtx";
import { db } from "../../firebase";
import { Wrapper } from "./UserChats.styled";
import { UserChat } from "./UserChat";

export const UserChats = () => {
  const [chats, setChats] = useState<any>();
  const { currentUser }: any = useAuthCtx();
  useEffect(() => {
    const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
      setChats(doc.data());
    });
    return unsub;
  }, []);

  if (!chats) {
    return <h4>No current chats</h4>;
  }

  return (
    <Wrapper>
      {chats ? (
        Object.entries(chats).map(([key, value]: any) => {
          return <UserChat key={value.userInfo.uid} {...value.userInfo} />;
        })
      ) : (
        <h4>Loading...</h4>
      )}
    </Wrapper>
  );
};

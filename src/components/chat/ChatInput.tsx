import { useRef } from "react";
import { db } from "../../firebase";
import { arrayUnion, updateDoc, doc, Timestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../firebase";
import { Wrapper, Input, LeftSideWrapper } from "./ChatInput.styled";
import { Button } from "../shared/Button";
import { IoMdAttach } from "react-icons/io";
import { useAuthCtx } from "../../store/AuthCtx";
import { useChatCtx } from "../../store/ChatCtx";

export const ChatInput = () => {
  const inputRef: any = useRef("");
  const { currentUser }: any = useAuthCtx();
  const { chatUser }: any = useChatCtx();
  const { chatId }: any = useChatCtx();

  const handleSendMessage = async (e: any) => {
    e.preventDefault();
    const textMessage = e.target[0].value;
    const image = e.target[1].files[0];
    if (image) {
      const uniqueIdForImage = `${new Date().getTime()}${chatUser.email}`;
      const imageRef = ref(storage, uniqueIdForImage);
      await uploadBytesResumable(imageRef, image);
      const downloadUrl = await getDownloadURL(imageRef);
      await updateDoc(doc(db, "chats", chatId), {
        messages: arrayUnion({
          id: new Date().getTime(),
          sender: currentUser.uid,
          image: downloadUrl,
          date: Timestamp.now(),
        }),
      });
    } else {
      await updateDoc(doc(db, "chats", chatId), {
        messages: arrayUnion({
          uid: new Date().getTime(),
          sender: currentUser.uid,
          message: textMessage,
          date: Timestamp.now(),
        }),
      });
      await updateDoc(doc(db, "userChats", currentUser.uid), {
        [chatId + ".lastMessage"]: textMessage,
      });
      await updateDoc(doc(db, "userChats", chatUser.uid), {
        [chatId + ".lastMessage"]: textMessage,
      });
    }
    inputRef.current.value = "";
  };
  return (
    <Wrapper onSubmit={handleSendMessage}>
      <Input ref={inputRef} />
      <input type="file" id="file" style={{ display: "none" }} ref={inputRef} />
      <LeftSideWrapper>
        <label htmlFor="file">
          <IoMdAttach style={{ fontSize: 24 }} />
        </label>
        <Button type="submit" width={50} height={30} color="blue">
          Send
        </Button>
      </LeftSideWrapper>
    </Wrapper>
  );
};

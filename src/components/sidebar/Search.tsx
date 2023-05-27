import { useState, Fragment } from "react";
import { db } from "../../firebase";
import { Input } from "../shared/Input";
import {
  query,
  getDocs,
  setDoc,
  updateDoc,
  collection,
  where,
  getDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import { Wrapper } from "./Search.styled";
import { useAuthCtx } from "../../store/AuthCtx";
import { Img } from "./NavBar.styles";

export const Search = () => {
  const [err, setErr] = useState(false);
  const { currentUser }: any = useAuthCtx();
  const [name, setName] = useState("");
  const [user, setUser] = useState<any>();
  const handleSearchUser = async () => {
    const usersDocRef = query(
      collection(db, "users"),
      where("displaName", "==", name)
    );
    const querySnapshot = await getDocs(usersDocRef);
    querySnapshot.forEach((doc) => {
      console.log("USER:", doc.data());
      setUser(doc.data());
    });
  };
  const handleKeyDown = (e: any) => {
    e.code === "Enter" && handleSearchUser();
  };
  const handleSelectUser = async () => {
    try {
      const concatinatedId =
        currentUser.uid > user.uid
          ? currentUser.uid + user.uid
          : user.uid + currentUser.uid;
      const docRef = await getDoc(doc(db, "chats", concatinatedId));

      if (!docRef.exists()) {
        await setDoc(doc(db, "chats", concatinatedId), { messages: [] });
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [concatinatedId + ".userInfo"]: {
            uid: user.uid,
            name: user.displaName,
            photoUrl: user.photoUrl,
            [concatinatedId + ".date"]: serverTimestamp(),
          },
        });

        await updateDoc(doc(db, "userChats", user.uid), {
          [concatinatedId + ".userInfo"]: {
            uid: currentUser.uid,
            name: currentUser.displaName,
            photoUrl: currentUser.photoUrl,
            [concatinatedId + ".date"]: serverTimestamp(),
          },
        });
      }
    } catch (error) {
      setErr(true);
    }
  };
  if (err) {
    return <h3>Something went wrong try again</h3>;
  }

  return (
    <Fragment>
      <Input
        onKeyDown={handleKeyDown}
        value={name}
        width={300}
        height={30}
        placeHolder="Search User"
        onChange={(e: any) => setName(e.target.value)}
      />
      {user ? (
        <Wrapper onClick={handleSelectUser}>
          <Img src={user.photoUrl} />
          <h4>{user.displaName}</h4>
        </Wrapper>
      ) : null}
    </Fragment>
  );
};

import { useState } from "react";
import { db } from "../firebase";
import { Input } from "../components/Input";
import {
  query,
  getDocs,
  setDoc,
  updateDoc,
  collection,
  where,
} from "firebase/firestore";

export const Search = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState<any>();
  const handleSearchUser = async () => {
    const usersDocRef = query(
      collection(db, "users"),
      where("displaName", "==", name)
    );
    const querySnapshot = await getDocs(usersDocRef);
    console.log("querySnap", querySnapshot);
    querySnapshot.forEach((doc) => {
      console.log("doc is:", doc);
      setUser(doc.data());
    });
  };
  const handleKeyDown = (e: any) => {
    e.code === "Enter" && handleSearchUser();
  };
  console.log("user is:", user);

  return (
    <Input
      onKeyDown={handleKeyDown}
      value={name}
      width={200}
      height={30}
      onChange={(e: any) => setName(e.target.value)}
    />
  );
};

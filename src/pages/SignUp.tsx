import { useState } from "react";
import { auth } from "../firebase";
import { db } from "../firebase";
import { storage } from "../firebase";
import { updateProfile, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Input } from "../components/shared/Input";
import { Wrapper, Label } from "./SignUp.styled";
import { AiFillFileAdd } from "react-icons/ai";
import { Button } from "../components/shared/Button";
import { setDoc, doc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e: any) => {
    setLoading(true);
    e.preventDefault();

    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const image = e.target[3].files[0];
    try {
      const userData = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const uniqueIdForAvatarRef = `${new Date().getTime()}${email}`;
      const avatarRef = ref(storage, uniqueIdForAvatarRef);

      await uploadBytesResumable(avatarRef, image);
      const downloadUrl = await getDownloadURL(avatarRef);
      await updateProfile(userData.user, {
        displayName: name,
        photoURL: downloadUrl,
      });
      await setDoc(doc(db, "users", userData.user.uid), {
        uid: userData.user.uid,
        displaName: name,
        email,
        photoUrl: downloadUrl,
      });
      await setDoc(doc(db, "userChats", userData.user.uid), {});
      setLoading(false);
      navigate("/");
    } catch (error) {
      setLoading(false);
      setErr(true);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <Wrapper $loading={loading}>
        {loading ? <h4 style={{ position: "absolute" }}>Loading...</h4> : null}
        <h3>Sign Up</h3>
        <Input width={200} height={30} placeHolder="Name" />
        <Input width={200} height={30} placeHolder="Email" />
        <Input width={200} height={30} placeHolder="Password" type="password" />
        <Input width={50} height={20} type="file" id="file" />
        <Label htmlFor="file">
          <AiFillFileAdd color="grey" />
          <span style={{ fontSize: 10 }}>Add an avatar</span>
        </Label>
        <Button color="green" width={200} height={30}>
          Submit
        </Button>
        {err ? (
          <h4 style={{ color: "red" }}>something went wrong, try again</h4>
        ) : null}
      </Wrapper>
    </form>
  );
};

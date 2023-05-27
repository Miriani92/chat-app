import React, { MouseEventHandler } from "react";
import { auth } from "../firebase";
import { Wrapper } from "./NavBar.styles";
import { signOut } from "firebase/auth";
import { Img } from "./NavBar.styles";
import { useAuthCtx } from "../store/AuthCtx";
import { Button } from "./Button";
import { Search } from "./Search";

export const NavBar = () => {
  const { currentUser }: any = useAuthCtx();
  console.log("cur", currentUser.photoURL);

  const handleSignOut: MouseEventHandler<HTMLButtonElement> = () => {
    signOut(auth);
  };

  return (
    <Wrapper>
      <Img src={currentUser.photoURL} />
      <Button width={100} height={30} color="grey" onClick={handleSignOut}>
        Log Out
      </Button>
    </Wrapper>
  );
};

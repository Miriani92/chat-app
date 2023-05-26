import React, { MouseEventHandler } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { Search } from "./Search";

export const Home = () => {
  const handleSignOut: MouseEventHandler<HTMLButtonElement> = () => {
    signOut(auth);
  };
  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleSignOut}>log out</button>
      <Search />
    </div>
  );
};

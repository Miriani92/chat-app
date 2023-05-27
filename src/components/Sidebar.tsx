import React from "react";
import { Wrapper } from "./SideBar.styled";
import { Search } from "./Search";
import { NavBar } from "./NavBar";
import { UserChats } from "./UserChats";

export const SideBar = () => {
  return (
    <Wrapper>
      <NavBar />
      <Search />
      <UserChats />
    </Wrapper>
  );
};

import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./Home";
import { LogIn } from "./LogIn";
import { SignUp } from "./SignUp";
import { useAuthCtx } from "../store/AuthCtx";

export const Chat = () => {
  const { currentUser }: any = useAuthCtx();
  const RouteGuard = ({ children }: any) => {
    if (!currentUser) {
      console.log(currentUser);
      return <Navigate to="login" />;
    }
    return children;
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <RouteGuard>
                <Home />
              </RouteGuard>
            }
          />
        </Route>
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<LogIn />} />
      </Routes>
    </BrowserRouter>
  );
};

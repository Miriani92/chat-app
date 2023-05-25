import { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { ChildrenProp } from "./Context.types";

const AuthContext = createContext({});

export const AuthProvider = ({ children }: ChildrenProp) => {
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (payload: any) => {
      setCurrentUser(payload);
    });
    return unSubscribe;
  }, []);
  return (
    <AuthContext.Provider value={{ currentUser: currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthCtx = () => {
  return useContext(AuthContext);
};

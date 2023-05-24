import { createContext, useContext } from "react";
import { ChildrenProp } from "./Context.types";

const AuthContext = createContext({});

export const AuthProvider = ({ children }: ChildrenProp) => {
  return (
    <AuthContext.Provider value={{ val: "Hello" }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthCtx = () => {
  return useContext(AuthContext);
};

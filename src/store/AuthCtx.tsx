import { createContext } from "react";
import { ChildrenProp } from "./Context.types";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }: ChildrenProp) => {
  return (
    <AuthContext.Provider value={{ val: "Hello" }}>
      {children}
    </AuthContext.Provider>
  );
};

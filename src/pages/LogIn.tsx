import { useState } from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "./SignUp.styled";
import { Input } from "../components/Input";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";

export const LogIn = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  const handleSignIn = async (e: any) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      if (!res) {
        setErr(true);
      }
      navigate("/");
    } catch (error) {
      setErr(true);
    }
  };
  return (
    <form onSubmit={handleSignIn}>
      <Wrapper>
        <Input width={200} height={30} placeHolder="Email" />
        <Input width={200} height={30} type="password" placeHolder="Password" />
        <Button width={200} height={30} color="green">
          Login
        </Button>
        <span>
          Do not have Account, <Link to="/signUp">Register</Link>
        </span>
        {err ? <h4 style={{ color: "red" }}>User is not found</h4> : null}
      </Wrapper>
    </form>
  );
};

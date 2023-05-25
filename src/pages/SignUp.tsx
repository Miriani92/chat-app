import { useState } from "react";
import { auth } from "../firebase";
import { updateProfile, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Input } from "../components/Input";
import { Wrapper, Label } from "./SignUp.styled";
import { AiFillFileAdd } from "react-icons/ai";
import { Button } from "../components/Button";

export const SignUp = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    try {
      const signInResponse = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      navigate("/");
    } catch (error) {
      setErr(true);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <Wrapper>
        <h3>Register</h3>
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

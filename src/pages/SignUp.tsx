import { Input } from "../components/Input";
import { Wrapper, Label } from "./SignUp.styled";
import { AiFillFileAdd } from "react-icons/ai";

export const SignUp = () => {
  return (
    <Wrapper>
      <Input width={200} height={30} placeHolder="Name" />
      <Input width={200} height={30} placeHolder="Email" />
      <Input width={200} height={30} placeHolder="Password" />
      <Input width={50} height={20} type="file" id="file" />
      <Label htmlFor="file">
        <AiFillFileAdd color="grey" />
        <span style={{ fontSize: 10 }}>Add an avatar</span>
      </Label>
    </Wrapper>
  );
};

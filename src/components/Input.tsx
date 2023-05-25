import React from "react";
import { Wrapper } from "./Input.styled";
type InputProp = {
  width: number;
  height: number;
  type?: string;
  placeHolder?: string;
  id?: string;
};

export const Input: React.FC<InputProp> = ({
  width,
  height,
  type,
  placeHolder,
  id,
}) => {
  return (
    <Wrapper
      id={id}
      placeholder={placeHolder}
      $width={width}
      $height={height}
      type={type}
    ></Wrapper>
  );
};

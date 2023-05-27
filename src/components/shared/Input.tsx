import React from "react";
import { Wrapper } from "./Input.styled";
type InputProp = {
  width: number;
  height: number;
  type?: string;
  placeHolder?: string;
  id?: string;
  onChange?: (e: any) => void;
  value?: string;
  onKeyDown?: (e: any) => void;
};

export const Input: React.FC<InputProp> = ({
  width,
  height,
  type,
  placeHolder,
  id,
  onChange,
  value,
  onKeyDown,
}) => {
  return (
    <Wrapper
      onKeyDown={onKeyDown}
      value={value}
      onChange={onChange}
      required
      id={id}
      placeholder={placeHolder}
      $width={width}
      $height={height}
      type={type}
    ></Wrapper>
  );
};

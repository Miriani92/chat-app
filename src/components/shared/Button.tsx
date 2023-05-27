import React from "react";
import { Btn } from "./Button.styled";

type BtnProps = {
  width: number;
  height: number;
  color: string;
  children: any;
  type?: string;
  onClick?: (e: any) => void;
};
export const Button: React.FC<BtnProps> = ({
  children,
  width,
  height,
  color,
  onClick,
}) => {
  return (
    <Btn onClick={onClick} $width={width} $height={height} $color={color}>
      {children}
    </Btn>
  );
};

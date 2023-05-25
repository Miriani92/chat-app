import styled from "styled-components";

type BtnProp = {
  $width: number;
  $height: number;
  $color: string;
};

export const Btn = styled.button<BtnProp>`
  all: unset;
  text-align: center;
  width: ${({ $width }) => `${$width}px`};
  height: ${({ $height }) => `${$height}px`};
  background-color: ${({ $color }) => `${$color}`};
  color: white;
  border-radius: 4px;
`;

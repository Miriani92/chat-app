import styled from "styled-components";
type Prop = {
  $width: number;
  $height: number;
};
export const Wrapper = styled.input<Prop>`
  width: ${({ $width }) => `${$width}px`};
  height: ${({ $height }) => `${$height}px`};
  border-radius: 4px;
  border: none;
  background-color: lightblue;
  ${({ type }) => type === "file" && { display: "none" }}
  &:focus {
    outline: none;
    border-bottom: 2px solid grey;
  }
`;

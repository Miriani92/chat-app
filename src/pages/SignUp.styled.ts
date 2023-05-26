import styled from "styled-components";

type Prop = {
  $loading: boolean;
};
export const Wrapper = styled.div<Prop>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 400px;
  height: 300px;
  background-color: #fafaf9;
  border-radius: 10px;
  gap: 8px;
  /* background-color: ${({ $loading }) =>
    $loading ? "rgba(0, 0, 0, 0.5)" : "#fafaf9"}; */
`;
export const Label = styled.label`
  width: 50px;
  height: 20px;
  width: 200px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

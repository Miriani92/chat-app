import styled from "styled-components";
type MsProps = {
  $alignSelfRight: boolean;
};

export const Wrapper = styled.div<MsProps>`
  margin-top: 12px;
  align-self: ${({ $alignSelfRight }) => ($alignSelfRight ? "end" : "start")};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  flex-direction: ${({ $alignSelfRight }) =>
    $alignSelfRight ? "flex" : "row-reverse"};
`;
export const ImageWrapper = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;
export const UserImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

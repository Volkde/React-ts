import styled from "@emotion/styled";

export const HomeworkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 20px;
`;

export const ImageBlock = styled.img`
  width: 300px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
`;

export const ErrorBlock = styled.div`
  color: red;
  font-weight: bold;
`;

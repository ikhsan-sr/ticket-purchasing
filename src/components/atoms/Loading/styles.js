
import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoadingStyles = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  position: absolute;
  left: 50%;
  top: 40%;
  border-top: 2px solid lightblue;
  border-right: 2px solid lightblue;
  border-bottom: 2px solid lightblue;
  border-left: 4px solid lightblue;
  background: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;

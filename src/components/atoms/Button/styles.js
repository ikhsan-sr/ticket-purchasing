import styled from "styled-components";

export const ButtonStyles = styled.button`
  width: 100%;
  ${props => props.primary && "background-color: #3B7E2A;"}
  ${props => props.primary && "color: white;"}
  font-size: 16px;
  font-weight: bold;
  padding: 14px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;
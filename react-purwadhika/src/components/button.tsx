import styled from "styled-components";

const StyledButton = styled.button`
  background-color: black;
  font-size: 32px;
  color: white;
  border-radius: 20px;
  font-size: 25px;
  border: none;
  padding: 5px 15px;
  cursor: pointer;
`;

function Button() {
  return (
    <StyledButton>Login</StyledButton>
  )
}

export default Button
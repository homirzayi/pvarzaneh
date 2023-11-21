import styled from "styled-components";

function Button({ children, onClick }) {
  return <ButtonStyled onClick={onClick}>{children}</ButtonStyled>;
}

export default Button;

const ButtonStyled = styled.button`
  border: 2px solid #02bfbb;
  padding: 1rem 2rem;
  border-radius: 5px;

  &:hover {
    background-color: #02bfbb;
  }
`;

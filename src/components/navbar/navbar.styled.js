import styled from "styled-components";

export const Nav = styled("div")`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 2rem;
  /* padding: 1rem 3rem; */
  a {
    color: ${(props) => props.theme.textWhite};
    text-decoration: none;
    display: inline-block;
    position: relative;
    font-size: 1rem;
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 0.15rem;
      bottom: 0;
      left: 0;
      background-color: ${(props) => props.theme.textWhite};
      transform-origin: bottom right;
      transition: transform 0.3s ease-out;
    }
    &:hover::after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }
  button {
    display: flex;
    padding: 0.1rem 0.5rem;
    color: ${(props) => props.theme.textWhite};
    border: 0.1rem solid ${(props) => props.theme.borderWhite};
    border-radius: 0.2rem;
    background-color: transparent;
  }
`;

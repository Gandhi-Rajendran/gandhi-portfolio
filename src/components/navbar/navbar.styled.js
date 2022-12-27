import styled from "styled-components";

export const Nav = styled.div`
  margin: auto 1rem;
  button {
    display: flex;
    padding: 0.1rem 0.5rem;
    color: ${(props) => props.theme.textWhite};
    border: 0.1rem solid ${(props) => props.theme.borderWhite};
    border-radius: 0.2rem;
    background-color: transparent;
  }
`;

export const A = styled.a`
  color: ${(props) => props.theme.textWhite};
  display: inline-block;
  position: relative;
  font-size: 1rem;
  margin: 0 1rem;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 0.2rem;
    bottom: 0;
    left: 0;
    background-color: ${(props) => props.theme.textWhite};
    transform-origin: bottom right;
    transition: transform 0.5s ease;
    margin-bottom: -0.2rem;
  }
  &:hover::after {
    margin-bottom: -0.2rem;
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

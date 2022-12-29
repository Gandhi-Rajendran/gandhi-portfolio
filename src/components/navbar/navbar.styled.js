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
  font-size: 0.8rem;
  margin: 0 1rem;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 0.15rem;
    transform: scaleX(0);
    bottom: 0;
    left: 0;
    transform-origin: bottom right;
    transition: transform 0.5s ease;
    margin-bottom: -0.25rem;
    background-color: ${(props) => props.theme.textWhite};
  }
  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

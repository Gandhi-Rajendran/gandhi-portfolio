import styled from "styled-components";

export const ContactContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: ${(props) => props.theme.background};
  h1 {
    color: ${(props) => props.theme.textSecondary};
    padding: 1rem;
  }
  main {
    width: 50%;
    margin: 1rem auto;
    height: 100%;
    background-color: red;
    border-radius: 1rem;
  }
`;

export const Footer = styled.footer`
  padding: 1rem;
  background-color: ${(props) => props.theme.backgroundWhite};
  p {
    color: ${(props) => props.theme.iconPrimary};
  }
`;

export const A = styled.a`
  height: 5rem;
  padding: 1rem;
  font-size: 2rem;
  color: ${(props) => props.theme.iconPrimary};
  :hover {
    color: ${(props) => props.theme.iconSecondary};
  }
`;

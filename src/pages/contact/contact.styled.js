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
    height: 100%;
    background-color: red;
  }
`;

export const Footer = styled.footer`
  padding: 1rem;
  background-color: ${(props) => props.theme.backgroundWhite};
  a {
    height: 5rem;
    padding: 1rem;
    font-size: 2rem;
    color: ${(props) => props.theme.iconPrimary};
    :hover {
      color: ${(props) => props.theme.iconSecondary};
    }
  }
  p {
    color: ${(props) => props.theme.iconPrimary};
  }
`;

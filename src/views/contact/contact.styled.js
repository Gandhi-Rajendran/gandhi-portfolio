import styled from "styled-components";

export const ContactContainer = styled("div")`
  height: 100vh;
  background-color: ${(props) => props.theme.background};
  h1 {
    color: ${(props) => props.theme.textSecondary};
  }
`;

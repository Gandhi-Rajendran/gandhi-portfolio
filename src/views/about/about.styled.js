import styled from "styled-components";

export const AboutContainer = styled("div")`
  height: 100vh;
  display: flex;
  font-size: 1.2rem;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.textWhite};
  line-height: 2;
  section {
    width: 50%;
    padding: 2rem;
  }
  h1 {
    color: ${(props) => props.theme.textSecondary};
    font-size: 2.2rem;
    font-weight: 900;
    padding-bottom: 3rem;
  }
  div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

export const Icon = styled("span")`
  color: ${(props) => props.theme.emoji};
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
`;

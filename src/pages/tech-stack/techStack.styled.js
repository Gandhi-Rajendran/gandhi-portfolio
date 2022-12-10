import styled from "styled-components";

export const TechStackContainer = styled("div")`
  height: 100vh;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.textWhite};
  text-align: center;
  h1 {
    color: ${(props) => props.theme.textSecondary};
    padding: 1rem;
  }
  p {
    font-size: 1.5rem;
  }
  main {
    display: grid;
    gap: 3rem;
    /* padding: 3rem; */
    grid-template-columns: repeat(3, auto);
    div {
      display: flex;
      align-items: center;
      gap: 2rem;
      img {
        width: 4.5rem;
        height: 4.5rem;
      }
      p {
        font-size: 1.5rem;
      }
    }
  }
`;

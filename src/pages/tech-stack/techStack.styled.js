import styled from "styled-components";

export const TechStackContainer = styled.div`
  height: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 1rem;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.textWhite};
  h1 {
    color: ${(props) => props.theme.textSecondary};
  }
`;

export const Main = styled.main`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  padding: 0 12%;
  div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
    img {
      width: 30%;
    }
  }

  /* @media screen and (max-width: 1024px) {
    background-color: lightgreen;
    grid-template-columns: repeat(2, auto);
  } */
  /* @media screen and (max-width: 768px) {
    background-color: lightyellow;
    grid-template-columns: repeat(1, auto);
  } */
`;

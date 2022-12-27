import styled from "styled-components";

export const TechStackContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.textWhite};
  font-size: 1.3rem;
  section {
    /* padding: 0 3rem; */
    /* background-color: red; */
    h1 {
      color: ${(props) => props.theme.textSecondary};
      padding: 1rem;
      font-size: 2.5rem;
    }
  }
`;

export const Main = styled.main`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, auto);
  justify-content: space-evenly;
  padding: 1.5rem;
  grid-gap: 1rem;
  div {
    display: flex;
    align-items: center;
    gap: 1rem;
    img {
      width: 6rem;
      object-fit: cover;
      object-position: center;
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

import styled from "styled-components";

export const TechStackContainer = styled.div`
  height: 100%;
  min-height: 90vh;
  padding: clamp(1rem, 1.5vw, 2rem);
  /* padding: clamp(1rem, 1.5vw, 2rem) clamp(5%, 1vw, 20%); */

  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: clamp(1.25rem, 1.2vw, 2rem);
  text-align: center;
  color: ${(props) => props.theme.textWhite};
  background-color: ${(props) => props.theme.background};
  h1 {
    color: ${(props) => props.theme.textSecondary};
    font-size: clamp(2rem, 2vw, 3rem);
  }
  @media (max-width: 1024px) {
    padding: 1rem 5%;
  }
  @media (max-width: 900px) {
    height: auto;
    font-size: 1.2rem;
  }
`;

export const Main = styled.main`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: clamp(1rem, 1vw, 2rem);
  position: relative;
  padding: 0 10%;
  @media (max-width: 1200px) {
    padding: 0 5%;
    place-self: center;
  }
  @media (max-width: 1024px) {
    padding: 0;
  }
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }

  div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;

    @media (max-width: 900px) and (width > 480px) {
      :last-of-type {
        position: relative;
        left: 50%;
      }
    }
    img {
      width: clamp(5rem, 5vw, 7rem);
      height: clamp(5rem, 5vw, 7rem);

      @media (max-width: 480px) {
        width: 4rem;
        height: 4rem;
      }
    }
  }
`;

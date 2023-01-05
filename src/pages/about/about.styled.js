import styled from "styled-components";

export const AboutContainer = styled.div`
  min-height: 90vh;
  padding: 2% 10%;
  font-size: clamp(1.25rem, 1.25vw, 2rem);
  line-height: 1.75;
  display: flex;
  gap: 10%;
  text-align: justify;
  color: ${(props) => props.theme.textWhite};
  background-color: ${(props) => props.theme.background};

  @media (max-width: 1024px) {
    height: auto;
    min-height: 0;
    flex-direction: column;
    gap: 2rem;
    padding: 4%;
  }

  @media (max-width: 480px) {
    font-size: clamp(1rem, 4.5vw, 1.25rem);
    gap: clamp(1rem, 10vw, 2rem);
    /* gap: 0; */
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    @media (max-width: 1024px) {
      gap: 1rem;
    }
  }

  h2 {
    font-size: clamp(2rem, 2vw, 3rem);
    color: ${(props) => props.theme.textSecondary};

    @media (max-width: 375px) {
      font-size: 1.6rem;
    }
  }
`;

export const Info = styled.div`
  width: 100%;
`;

export const Icon = styled.section`
  display: flex;
  align-items: center;
  gap: clamp(0.5rem, 1.5vw, 2rem);
  svg {
    width: 2rem;
    font-size: clamp(1rem, 1.5vw, 2rem);
  }
`;

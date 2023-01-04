import styled from "styled-components";

export const AboutContainer = styled.div`
  min-height: 90vh;
  padding: 2% 10%;
  font-size: clamp(1rem, 1.25vw, 2rem);
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
    gap: 1.5rem;
    padding: 4%;
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
    font-size: clamp(1.5rem, 2vw, 2.5rem);
    color: ${(props) => props.theme.textSecondary};
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

import styled from "styled-components";

export const AboutContainer = styled.div`
  height: 100%;
  min-height: 90vh;
  padding: clamp(1rem, 2vw, 5%) clamp(3%, 1vw, 10%);
  font-size: clamp(0.6rem, 1.5vw, 2rem);
  line-height: 1.75;
  display: flex;
  gap: 10%;
  text-align: justify;
  color: ${(props) => props.theme.textWhite};
  background-color: ${(props) => props.theme.background};

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: space-between;
    gap: 5%;
    font-size: clamp(0.9rem, 1vw, 1.5rem);
  }
  @media (max-width: 480px) {
    gap: 1rem;
    font-size: clamp(0.8rem, 4.5vw, 2rem);
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    @media (max-width: 768px) {
      gap: 0;
      justify-content: space-between;
      height: 50%;
    }
  }

  h2 {
    color: ${(props) => props.theme.textSecondary};
    font-size: clamp(1.2rem, 2vw, 2rem);
    @media (max-width: 480px) {
      font-size: clamp(1rem, 5vw, 2rem);
    }
  }
`;

export const InfoDiv = styled.div`
  width: 100%;
`;

export const Icon = styled.section`
  display: flex;
  align-items: center;
  gap: clamp(0.5rem, 1.5vw, 2rem);
  svg {
    width: 2rem;
    font-size: clamp(1rem, 2vw, 2rem);
    @media (max-width: 480px) {
      font-size: clamp(1rem, 5vw, 2rem);
    }
  }
`;

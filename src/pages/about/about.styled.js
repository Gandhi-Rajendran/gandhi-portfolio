import styled from "styled-components";

export const AboutContainer = styled.div`
  height: 100%;
  padding: clamp(1rem, 2vw, 5%) clamp(5%, 1vw, 10%);
  font-size: clamp(1.2rem, 1.5vw, 2rem);
  line-height: 1.75;
  display: flex;
  gap: 10%;
  text-align: justify;
  color: ${(props) => props.theme.textWhite};
  background-color: ${(props) => props.theme.background};

  div {
    display: flex;
    flex-direction: column;
    gap: clamp(1.5rem, 1.5vw, 2rem);
  }

  h2 {
    color: ${(props) => props.theme.textSecondary};
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 5%;
    height: auto;
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
    font-size: clamp(1rem, 2.5vw, 2rem);
  }
`;

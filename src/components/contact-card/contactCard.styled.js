import styled from "styled-components";

export const ContactCardContainer = styled.div`
  margin: auto;
  padding: clamp(1rem, 1.2vw, 1.5rem);
  font-size: clamp(1.2rem, 1.5vw, 2rem);
  display: flex;
  flex-direction: column;
  gap: 3rem;
  justify-content: space-between;
  text-align: left;
  border-radius: 1rem;
  color: ${(props) => props.theme.textBlack};
  background-color: ${(props) => props.theme.backgroundWhite};

  @media (max-width: 1024px) {
    gap: 2rem;
  }
  @media (max-width: 768px) {
    gap: 1rem;
    margin: auto 1rem;
  }
  @media (max-width: 375px) {
    font-size: 1rem;
  }

  h1 {
    color: ${(props) => props.theme.textSecondary};
    font-size: clamp(2rem, 2vw, 3rem);
    margin: 0 auto;

    @media (max-width: 375px) {
      font-size: 1.8rem;
    }
  }
  p {
    display: flex;
    align-items: center;
    gap: clamp(1.25rem, 1.5vw, 2rem);
    svg {
      width: clamp(2rem, 1vw, 3rem);
    }
  }
  svg {
    font-size: clamp(1.8rem, 1.6vw, 3rem);

    @media (max-width: 375px) {
      font-size: 1.25rem;
    }
  }
`;

export const ContactDiv = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: clamp(1rem, 1vw, 2rem);
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: clamp(0.6rem, 1vw, 1.2rem);

    span {
      vertical-align: center;
      display: flex;
      gap: 0.5rem;
      align-items: center;
      color: ${(prop) => prop.theme[prop.color]};
    }
  }
`;

export const SPAN = styled.span`
  color: ${(prop) => prop.theme[prop.color]};
`;

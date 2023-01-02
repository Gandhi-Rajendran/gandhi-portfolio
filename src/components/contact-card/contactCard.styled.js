import styled from "styled-components";

export const ContactCardContainer = styled.div`
  /* margin: clamp(0.8rem, 2vw, 2rem); */
  margin: 3%;
  padding: clamp(1rem, 1.2vw, 1.5rem);
  font-size: clamp(0.8rem, 1.2vw, 2rem);
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  border-radius: 1rem;
  color: ${(props) => props.theme.textBlack};
  background-color: ${(props) => props.theme.backgroundWhite};

  @media (min-width: 1440px) {
    margin: auto;
    flex-grow: 0;
    gap: 3rem;
  }
  p {
    display: flex;
    align-items: center;
    gap: clamp(1rem, 1vw, 2rem);
    svg {
      width: clamp(1.5rem, 1vw, 3rem); // for alignment
      font-size: clamp(1rem, 2vw, 3rem);
    }
  }
`;

export const H1 = styled.h1`
  color: ${(props) => props.theme.textSecondary};
  font-size: clamp(1.2rem, 2vw, 3rem);
  font-weight: 800;
  margin: 0 auto;
`;

export const ContactDiv = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 425px) {
    flex-direction: column;
    gap: clamp(0.8rem, 1vw, 1rem);
  }

  section {
    display: flex;
    flex-direction: column;
    gap: clamp(0.6rem, 1vw, 1.2rem);

    span {
      vertical-align: center;
      display: flex;
      gap: 0.5rem;
      align-items: center;
      color: ${(prop) => prop.theme[prop.color]};
    }
    svg {
      font-size: clamp(1rem, 1.5vw, 2rem);
    }
  }
`;

export const Span = styled.span`
  color: ${(prop) => prop.theme[prop.color]};
`;

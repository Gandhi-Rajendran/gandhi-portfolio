import styled from "styled-components";

export const ContactContainer = styled.div`
  height: 100%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.background};

  @media (max-width: 768px) {
    height: auto;
  }
`;

export const Footer = styled.footer`
  width: 100%;
  height: 12%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  color: ${(props) => props.theme.textGrey};
  background-color: ${(props) => props.theme.backgroundWhite};
  p {
    font-size: clamp(0.6rem, 1.2vw, 1.5rem);
  }
`;
export const Social = styled.div`
  display: flex;
  gap: clamp(1rem, 1vw, 1rem);
`;

export const A = styled.a`
  font-size: clamp(1rem, 2vw, 2.5rem);
  color: ${(props) => props.theme[props.bgColor]};
  :hover {
    transform: scale(1.5);
  }
`;

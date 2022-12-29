import styled from "styled-components";

export const ContactContainer = styled.div`
  height: 100%;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  background-color: ${(props) => props.theme.background};
`;

export const Footer = styled.footer`
  width: 100%;
  height: 18%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  color: ${(props) => props.theme.textGrey};
  background-color: ${(props) => props.theme.backgroundWhite};
`;
export const Social = styled.div`
  width: 9rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const A = styled.a`
  font-size: 2rem;
  color: ${(props) => props.theme[props.bgColor]};
  :hover {
    transform: scale(1.5);
  }
`;

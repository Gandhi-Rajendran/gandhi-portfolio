import styled from "styled-components";

export const HomeContainer = styled.div`
  height: 100%;
  padding: 2rem;
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: Center;
  color: ${(props) => props.theme.textWhite};
  background-color: ${(props) => props.theme.background};
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  h1 {
    font-size: 3rem;
    letter-spacing: 0.2rem;
  }
  span {
    color: ${(props) => props.theme.textTypeWriter};
  }
`;

export const Button = styled.button`
  margin-right: 0.8rem;
  font-size: 1rem;
  padding: 0.8rem 1.5rem;
  border-radius: 0.3rem;
  border: none;
  background-color: ${(props) => props.theme.backgroundPrimary};
  color: ${(props) => props.theme.textWhite};
  :hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;

export const LogoFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  /* font-size: 1.5rem; */
`;

export const A = styled.a`
  padding: 2rem;
  border-radius: 50%;
  color: ${(props) => props.theme.icon};
  background-color: ${(props) => props.theme.iconBackground};
  position: relative;
  :hover {
    font-size: 2rem;
    top: -15%;
    transform: scale(1.1);
    background-color: ${(props) => props.theme[props.bgColor]};
  }
  svg {
    position: absolute;
    transform: translate(-50%, -50%);
  }
`;

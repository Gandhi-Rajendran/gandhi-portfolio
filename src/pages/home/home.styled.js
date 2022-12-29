import styled from "styled-components";

export const HomeContainer = styled.div`
  height: 100%;
  padding: 2rem;
  /* font-size: 0.5rem; */
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
  p {
    font-size: 1.5rem;
    span {
      font-weight: 600;
      color: ${(props) => props.theme.textTypewriter};
    }
  }
`;

export const Button = styled.button`
  margin-right: 0.8rem;
  /* font-size: 1rem; */
  padding: 0.6rem 1.2rem;
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
`;

export const A = styled.a`
  padding: 1.5rem;
  border-radius: 50%;
  color: ${(props) => props.theme.iconPrimary};
  background-color: ${(props) => props.theme.iconBackground};
  position: relative;
  :hover {
    font-size: 1.3rem;
    top: -10%;
    transform: scale(1.1);
    background-color: ${(props) => props.theme[props.bgColor]};
  }
  svg {
    position: absolute;
    transform: translate(-50%, -50%);
  }
`;

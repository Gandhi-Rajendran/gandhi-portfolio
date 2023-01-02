import styled from "styled-components";

export const HomeContainer = styled.div`
  height: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: Center;
  justify-content: center;
  color: ${(props) => props.theme.textWhite};
  background-color: ${(props) => props.theme.background};

  @media (max-width: 480px) {
    text-align: center;
    background-color: limegreen;
    /* margin: 1rem; */
    padding: 1rem;
    /* padding: 0; */
  }
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
  }
  p {
    font-size: 1.5rem;
    @media (max-width: 480px) {
      font-size: clamp(1.5rem, 1vw, 1.5rem);
    }

    span {
      font-weight: 600;
      color: ${(props) => props.theme.textTypewriter};
    }
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  gap: 1rem;
`;
export const Button = styled.button`
  padding: 0.6rem 1.2rem;
  border-radius: 0.3rem;
  border: none;
  font-size: 1rem;
  background-color: ${(props) => props.theme.backgroundPrimary};
  color: ${(props) => props.theme.textWhite};
  :hover {
    opacity: 0.7;
    cursor: pointer;
    transform: scale(0.95);
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
  font-size: clamp(1.3rem, 1.5vw, 1.5rem);
  color: ${(props) => props.theme.iconPrimary};
  background-color: ${(props) => props.theme.iconBackground};
  position: relative;
  :hover {
    top: -10%;
    transform: scale(1.1);
    background-color: ${(props) => props.theme[props.bgColor]};
  }
  svg {
    position: absolute;
    transform: translate(-50%, -50%);
  }
`;

import styled from "styled-components";

export const HomeContainer = styled.div`
  height: 100%;
  background-color: ${(props) => props.theme.background};
  padding: 2rem;
  color: ${(props) => props.theme.textWhite};
  display: flex;
  flex-direction: column;
  align-items: Center;
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
      color: ${(props) => props.theme.textTypeWriter};
    }
  }
`;

export const Button = styled.button`
  margin-right: 0.8rem;
  padding: 0.8rem 1.5rem;
  border-radius: 0.3rem;
  border: none;
  background-color: ${(props) => props.theme.backgroundPrimary};
  a {
    color: ${(props) => props.theme.textWhite};
  }
  :hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;

export const LogoFooter = styled.footer`
  a {
    display: inline-flex;
    color: ${(props) => props.theme.icon};
    background-color: ${(props) => props.theme.iconBackground};
    box-sizing: border-box;
    padding: 1rem;
    margin: 0 0.6rem;
    border-radius: 50%;
    font-size: 1.5rem;
    :hover {
      cursor: pointer;
      color: ${(props) => props.theme.iconBackground};
      background-color: ${(props) => props.theme.icon};
      transform: scale(1.2);
    }
  }
`;

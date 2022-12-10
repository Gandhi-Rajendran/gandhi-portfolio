import styled from "styled-components";

export const HomeContainer = styled("div")`
  /* height: calc(100vh-10%); */
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.textWhite};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  h1 {
    font-size: 4.5rem;
    letter-spacing: 0.3rem;
    margin: 2rem 0;
  }
  p {
    margin: 0 1rem;
    font-size: 2.2rem;
    span {
      color: ${(props) => props.theme.textTypeWriter};
    }
  }
`;

export const LogoFooter = styled("footer")`
  position: absolute;
  bottom: 0%;
  /* margin: 3rem; */
  a {
    display: inline-flex;
    color: ${(props) => props.theme.icon};
    background-color: ${(props) => props.theme.iconBackground};
    box-sizing: border-box;
    padding: 1rem;
    margin: 0 0.6rem;
    border-radius: 50%;

    :hover {
      cursor: pointer;
      color: ${(props) => props.theme.iconBackground};
      background-color: ${(props) => props.theme.icon};
    }
  }
`;

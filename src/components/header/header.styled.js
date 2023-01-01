import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 10vh;
  /* min-height: 4rem; */
  display: flex;
  justify-content: end;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundPrimary};
  padding: 1rem;
`;

export const Tab = styled.div`
  display: none;
  color: ${(props) => props.theme.textWhite};
  svg {
    font-size: 1.2rem;
  }
  :hover {
    cursor: pointer;
  }
  @media (max-width: 768px) {
    display: block;
  }
`;

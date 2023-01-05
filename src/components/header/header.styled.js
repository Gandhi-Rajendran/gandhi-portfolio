import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundPrimary};
  padding: 0 1.5rem;
`;

export const Tab = styled.div`
  display: none;
  color: ${(props) => props.theme.textWhite};
  svg {
    font-size: 1.5rem;
  }
  :hover {
    cursor: pointer;
  }
  @media (max-width: 768px) {
    display: block;
  }
`;

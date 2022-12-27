import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 10%;
  min-height: 8vh;
  background-color: ${(props) => props.theme.backgroundPrimary};
  display: flex;
  justify-content: end;
`;

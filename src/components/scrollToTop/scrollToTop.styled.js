import styled from "styled-components";

export const ScrollContainer = styled.div`
  display: flex;
  padding: 1rem;
  margin: 1rem 3rem;
  position: absolute;
  z-index: 1000;
  bottom: 0;
  right: 0;
  border-radius: 50%;
  color: ${(props) => props.theme.icon};
  background-color: ${(props) => props.theme.iconBackground};
  :hover {
    cursor: pointer;
    color: ${(props) => props.theme.iconBackground};
    background-color: ${(props) => props.theme.icon};
  }
`;

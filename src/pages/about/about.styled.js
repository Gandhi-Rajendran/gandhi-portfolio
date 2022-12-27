import styled from "styled-components";

export const AboutContainer = styled.div`
  height: 100%;
  padding: 2rem;
  font-size: 1.5rem;
  line-height: 2;
  display: flex;
  gap: 3rem;
  text-align: justify;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.textWhite};
  div {
    width: 50%;
  }
  h1 {
    color: ${(props) => props.theme.textSecondary};
    font-size: 2.5rem;
  }

  /* section {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    svg {
    font-size: 1.5rem;
    }
  } */
`;
export const IconDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  svg {
    font-size: 2rem;
  }
`;

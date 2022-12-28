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
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  h1 {
    color: ${(props) => props.theme.textSecondary};
    font-size: 2.5rem;
  }
`;

export const Icon = styled.section`
  display: flex;
  align-items: center;
  gap: 2rem;
  svg {
    font-size: 2rem;
  }
`;

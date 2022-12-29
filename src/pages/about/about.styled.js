import styled from "styled-components";

export const AboutContainer = styled.div`
  height: 100%;
  padding: 2rem 10%;
  font-size: 1.2rem;
  line-height: 1.75;
  display: flex;
  gap: 10%;
  text-align: justify;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.textWhite};

  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  h2 {
    color: ${(props) => props.theme.textSecondary};
  }
`;

export const InfoDiv = styled.div`
  width: 100%;
`;
export const Icon = styled.section`
  display: flex;
  align-items: center;
  gap: 2rem;
  svg {
    width: 2rem;
    font-size: 2rem;
  }
`;

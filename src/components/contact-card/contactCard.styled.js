import styled from "styled-components";

export const ContactCardContainer = styled.div`
  color: ${(props) => props.theme.textWhite};
  height: 100%;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: center;
  ul {
    padding: 3rem;
    list-style-type: none;
    li {
      font-size: 2rem;
    }
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3rem;
  div {
    background-color: ${(props) => props.theme.backgroundPrimary};
    border-radius: 1rem;
    padding: 2rem;
    h3 {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding-bottom: 1rem;
    }
  }
`;

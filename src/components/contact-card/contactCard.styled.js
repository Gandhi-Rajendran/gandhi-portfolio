import styled from "styled-components";

export const ContactCardContainer = styled.div`
  max-width: 50rem;
  width: 50%;
  height: 100%;
  padding: 1rem 2rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: left;
  font-size: 1.3rem;
  background-color: #fffff7;
  color: ${(props) => props.theme.textBlack};

  p {
    display: flex;
    align-items: center;
    gap: 2rem;
    svg {
      width: 3rem; // for alignment
      font-size: 2rem;
    }
  }
`;

export const H1 = styled.h1`
  color: ${(props) => props.theme.textSecondary};
  font-size: 1.8rem;
  font-weight: 800;
  margin: 0 auto;
`;

export const ContactDiv = styled.div`
  display: flex;
  justify-content: space-between;
  section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    svg {
      font-size: 1.5rem;
    }
  }
`;

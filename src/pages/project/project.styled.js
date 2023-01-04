import styled from "styled-components";

export const ProjectContainer = styled.div`
  padding: clamp(1rem, 5.5vw, 2rem);
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: clamp(1rem, 1.5vw, 2rem);
  color: ${(props) => props.theme.textSecondary};
  background-color: ${(props) => props.theme.background};

  h1 {
    font-size: clamp(2rem, 2.5vw, 3rem);
  }
`;

export const ProjectBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: clamp(1.5rem, 2vw, 2rem);

  @media (max-width: 375px) {
    gap: 1rem;
  }
`;

export const ProjectCard = styled.div`
  width: 25%;
  min-width: 22.7rem;
  max-width: 28rem;
  height: 32rem;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  color: ${(props) => props.theme.textBlack};
  background-color: ${(props) => props.theme.backgroundWhite};

  @media (max-width: 1200px) {
    height: 28rem;
  }

  @media (max-width: 480px) {
    width: 100%;
    min-width: 15rem;
  }

  img {
    height: 100%;
  }
  :hover {
    cursor: pointer;
    .overlay {
      top: 0;
    }
  }
`;

export const Content = styled.div`
  height: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* color: white; */
  /* background-color: #171717; */
  h2 {
    font-size: 1.8rem;
  }
  p {
    font-size: clamp(1.1rem, 1.3vw, 1.5rem);
  }
`;

export const OverLay = styled.div`
  position: absolute;
  color: ${(props) => props.theme.textWhite};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  top: -100%;
  backdrop-filter: blur(0.1rem);
  background-color: ${(props) => props.theme.overlay};
  transition: 0.6s ease-in-out;
  p {
    padding: 1rem;
    font-size: 1.5rem;
    font-weight: 600;
  }
`;

export const DIV = styled.div`
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  a {
    font-size: 3rem;
    color: ${(props) => props.theme.text};
  }
  :hover {
    transform: scale(1.2);
  }
`;

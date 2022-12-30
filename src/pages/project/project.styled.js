import styled from "styled-components";

export const ProjectContainer = styled.div`
  height: 100%;
  padding: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  color: ${(props) => props.theme.textSecondary};
  background-color: ${(props) => props.theme.background};
`;

export const ProjectBody = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  gap: 6%;
  padding: 0 5%;

  @media (width > 1368px) {
    height: 75%;
  }
`;

export const ProjectCard = styled.div`
  /* height: 90%; */
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  color: ${(props) => props.theme.textBlack};
  background-color: ${(props) => props.theme.backgroundWhite};
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
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* background-color: ${(props) => props.theme.backgroundPrimary}; */
  p {
    text-align: justify;
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
  top: -150%;
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

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
  h1 {
    font-size: 2.5rem;
  }
`;

export const ProjectBody = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, auto);
  justify-content: center;
  gap: 9%;

  /* @media screen and (min-width: 1240px) {
    background-color: green;
    grid-template-columns: repeat(3, 25%);
  } */
`;

export const ProjectCard = styled.div`
  /* max-width: 25rem; */
  height: 90%;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  align-self: ${(props) => (props.alignSelf ? "flex-start" : "flex-end")};
  color: ${(props) => props.theme.textBlack};
  background-color: ${(props) => props.theme.backgroundWhite};
  img {
    width: 100%;
    height: 40%;
    object-fit: fill;
  }

  :hover {
    cursor: pointer;
    .overlay {
      top: 0;
    }
  }
`;

export const Content = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
  h2 {
    font-size: 2rem;
  }
`;
export const Details = styled.p`
  font-size: 1.2rem;
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
  /* top: 0%; */
  top: -100%;
  backdrop-filter: blur(0.1rem);
  background-color: ${(props) => props.theme.backgroundOverlay};
  transition: 0.6s ease-in-out;
  p {
    font-size: 1.5rem;
    font-weight: 600;
    padding: 1rem;
    align-self: flex-start;
  }
`;

export const DIV = styled.div`
  flex-grow: 1;
  width: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;
export const A = styled.a`
  font-size: 3rem;
  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    transform: scale(1.5);
  }
`;

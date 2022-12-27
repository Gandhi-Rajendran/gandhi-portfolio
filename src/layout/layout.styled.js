import styled from "styled-components";

export const LayoutContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
export const Container = styled.div`
  height: 90%;
  overflow-y: scroll;
  scroll-behavior: smooth;
  /* ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.scrollTrack};
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.scrollThumb};
  } */
`;

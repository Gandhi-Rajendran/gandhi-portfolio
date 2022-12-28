import styled from "styled-components";

export const LayoutContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
export const Container = styled.div`
  height: 90%;
  overflow-y: overlay;
  scroll-behavior: smooth;

  ::-webkit-scrollbar {
    width: 0.7rem;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 50rem;
    background-color: ${(props) => props.theme.scrollThumb};
  }
`;

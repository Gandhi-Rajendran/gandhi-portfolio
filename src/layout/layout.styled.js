import styled from "styled-components";

export const LayoutContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: none;
`;

export const Container = styled.div`
  min-height: 90vh;
  overflow-x: none;
  overflow-y: overlay;
  scroll-behavior: smooth;

  ::-webkit-scrollbar {
    width: clamp(0.4rem, 1vw, 0.8rem);
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 50rem;
    background-color: ${(props) => props.theme.scrollThumb};
  }
`;

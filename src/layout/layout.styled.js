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

  ::-webkit-scrollbar {
    width: 0.7rem;
  }
  ::-webkit-scrollbar-track {
    background-color: limegreen;
    /* background-color: ${(props) => props.theme.scrollTrack}; */
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 50rem;
    background-color: ${(props) => props.theme.scrollThumb};
  }
`;

// "&::-webkit-scrollbar": {
//               width: "5px", // for vertical scroll
//               height: "5px", // for horizontal scroll
//               backgroundColor: "transparent",
//               borderRadius: "10px",
//             },

//             "&::-webkit-scrollbar-thumb": {
//               borderRadius: "10px",
//               backgroundColor: theme.palette.primary.light,
//               height: "20px",
//             },

//             "&::-webkit-scrollbar-track-piece:start": {
//               backgroundColor: "transparent",
//               marginTop: "20px",
//             },

//             "&::-webkit-scrollbar-track-piece:end": {
//               backgroundColor: "transparent",
//               marginBottom: "20px",
//             },

import styled from "styled-components";

export const ContactCardContainer = styled.div`
  color: ${(props) => props.theme.textWhite};
  height: 100%;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;

  h1 {
    text-align: center;
    font-weight: 800;
  }
  p {
    font-size: 1.2rem;
    line-height: 4;
    display: flex;
    align-items: center;
    gap: 2rem;
    svg {
      width: 3rem;
      font-size: 2rem;
    }
  }
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: lime;
  div {
    /* background-color: ${(props) => props.theme.backgroundPrimary}; */
    border-radius: 1rem;
    /* padding: 2rem; */
    h3 {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding-bottom: 1rem;
    }
  }
`;

// import styled from "styled-components";

// export const ContactCardContainer = styled.div`
//   color: ${(props) => props.theme.textWhite};
//   height: 100%;
//   text-align: left;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   padding: 1rem;
//   ul {
//     list-style-type: none;
//     h1 {
//       text-align: center;
//       font-weight: 800;
//     }
//     li {
//       font-size: 1.2rem;
//       line-height: 4;
//       display: flex;
//       align-items: center;
//       gap: 2rem;
//       svg {
//         width: 3rem;
//         font-size: 2rem;
//       }
//     }
//   }
// `;

// export const CardContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   background-color: lime;
//   div {
//     /* background-color: ${(props) => props.theme.backgroundPrimary}; */
//     border-radius: 1rem;
//     /* padding: 2rem; */
//     h3 {
//       display: flex;
//       align-items: center;
//       gap: 0.5rem;
//       padding-bottom: 1rem;
//     }
//   }
// `;

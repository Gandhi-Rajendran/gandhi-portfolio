import styled from "styled-components";

export const Nav = styled.ul`
  width: 30%;
  min-width: 30rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* --------- SIDE NAVBAR --------- */
  @media (max-width: 768px) {
    min-width: 0;
    width: 100%;
    padding: 1.5rem;
    height: 90%;
    display: ${(props) => (props.isSideNav ? "flex" : "none")};
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    gap: 8%;
    position: absolute;
    z-index: 3;
    top: 10%;
    bottom: 0;
    right: 0;
    background-color: ${(props) => props.theme.overlay};
    transition: all 0.5s ease-in-out;
  }

  button {
    display: flex;
    padding: 0.1rem 0.5rem;
    color: ${(props) => props.theme.textWhite};
    border: 0.1rem solid ${(props) => props.theme.borderWhite};
    border-radius: 0.2rem;
    background-color: transparent;
  }
`;

export const Li = styled.li`
  list-style-type: none;
  color: ${(props) => props.theme.textWhite};
  font-size: clamp(1rem, 1vw, 1.25rem);

  a {
    display: inline-block;
    position: relative;
    color: ${(props) => props.theme.textWhite};
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 0.15rem;
      transform: scaleX(0);
      bottom: 0;
      left: 0;
      transform-origin: bottom right;
      transition: transform 0.5s ease;
      margin-bottom: -0.25rem;
      background-color: ${(props) => props.theme.backgroundWhite};
    }
    &:hover::after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }
  :hover {
    cursor: pointer;
  }
`;

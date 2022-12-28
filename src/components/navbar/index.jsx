// import { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { A, Nav } from "./navbar.styled";

const Navbar = () => {
  // const [mode, setMode] = useState(false);
  // const modeHandler = () => {
  //   setMode(!mode);
  // };
  return (
    <Nav>
      <A href="#home">HOME</A>
      <A href="#about">ABOUT</A>
      <A href="#project">PROJECTS</A>
      <A href="#tech-stack">TECH STACK</A>
      <A href="#contact">CONTACT</A>
      {/* <button onClick={modeHandler}>
        {mode ? (
          <FontAwesomeIcon icon={faSun} />
        ) : (
          <FontAwesomeIcon icon={faMoon} />
        )}
      </button> */}
    </Nav>
  );
};

export default Navbar;

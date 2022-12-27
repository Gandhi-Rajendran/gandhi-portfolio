// import { useState } from "react";
import { A, Nav } from "./navbar.styled";
// import { MdDarkMode } from "react-icons/md";
// import { BsSun } from "react-icons/bs";

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
      {/* <button onClick={modeHandler}>{mode ? <BsSun /> : <MdDarkMode />}</button> */}
    </Nav>
  );
};

export default Navbar;

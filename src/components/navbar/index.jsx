import { useState } from "react";
import { Nav } from "./navbar.styled";
import { MdDarkMode } from "react-icons/md";
import { BsSun } from "react-icons/bs";

const Navbar = () => {
  const [mode, setMode] = useState(false);
  const modeHandler = () => {
    setMode(!mode);
  };
  return (
    <Nav>
      <a href="#home">HOME</a>
      <a href="#about">ABOUT</a>
      <a href="#tech-stack">TECH STACK</a>
      <a href="#contact">CONTACT</a>
      <button onClick={modeHandler}>{mode ? <BsSun /> : <MdDarkMode />}</button>
    </Nav>
  );
};

export default Navbar;

// import { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faXmark } from "@fortawesome/free-solid-svg-icons";
// import { faMoon, faSun } from "@fortawesome/free-soLid-svg-icons";
import { Nav, Li } from "./navbar.styled";

const Navbar = (props) => {
  const { isSideNav, onSideNavHandler } = props;
  // const [mode, setMode] = useState(false);
  // const modeHandler = () => {
  //   setMode(!mode);
  // };

  return (
    <Nav className="Navbar" isSideNav={isSideNav}>
      <Li onClick={onSideNavHandler}>
        <a href="#home">HOME</a>
      </Li>
      <Li onClick={onSideNavHandler}>
        <a href="#about">ABOUT</a>
      </Li>
      <Li onClick={onSideNavHandler}>
        <a href="#project">PROJECTS</a>
      </Li>
      <Li onClick={onSideNavHandler}>
        <a href="#tech-stack">TECH STACK</a>
      </Li>
      <Li onClick={onSideNavHandler}>
        <a href="#contact">CONTACT</a>
      </Li>
      {/* <button onCLick={modeHandler}>
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

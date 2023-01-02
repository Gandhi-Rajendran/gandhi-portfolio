import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../../components/navbar";
import { HeaderContainer, Tab } from "./header.styled";

const Header = () => {
  const [isSideNav, setIsSideNav] = useState(false);

  const onSideNavHandler = () => {
    setIsSideNav(!isSideNav);
  };

  return (
    <HeaderContainer>
      <Navbar {...{ isSideNav, onSideNavHandler }} />
      <Tab onClick={onSideNavHandler}>
        {!isSideNav ? (
          <FontAwesomeIcon icon={faBars} />
        ) : (
          <FontAwesomeIcon icon={faXmark} />
        )}
      </Tab>
    </HeaderContainer>
  );
};

export default Header;

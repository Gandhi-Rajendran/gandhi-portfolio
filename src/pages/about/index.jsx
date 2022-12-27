import { AboutContainer, IconDiv } from "./about.styled";
import { AiOutlineCalendar } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";
import { FaPhoneAlt, FaLanguage } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <AboutContainer id="about">
      <div>
        <h1>About</h1>
        <p>
          Hi 👋 I'm <b>Gandhi</b>, Experienced Web application Developer and
          create successful applications that are Fast, Easy to use, and built
          with best practices.
        </p>
        <p>Constantly Embracing new Techs and</p>
      </div>
      <div>
        <h1>Basic Information</h1>
        <IconDiv>
          <FontAwesomeIcon icon={faCalendar} />
          09 November, 1997
        </IconDiv>
        <IconDiv>
          <FontAwesomeIcon icon={faEnvelope} />
          {/* <FontAwesomeIcon icon="fa-solid fa-envelope" /> */}
          ksrmgandhiraj@gmail.com
        </IconDiv>
        <IconDiv>
          <FontAwesomeIcon icon={faPhone} />
          +91-8825790748
        </IconDiv>
        <IconDiv>
          <MdLocationOn />
          Chennai, India
        </IconDiv>
        <IconDiv>
          <FaLanguage />
          Tamil, English
        </IconDiv>
      </div>
    </AboutContainer>
  );
};

export default About;

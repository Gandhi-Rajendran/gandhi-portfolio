import { AboutContainer, Icon } from "./about.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import {
  faEnvelope,
  faLanguage,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

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
        <Icon>
          <FontAwesomeIcon icon={faCalendar} />
          09 November, 1997
        </Icon>
        <Icon>
          <FontAwesomeIcon icon={faEnvelope} />
          ksrmgandhiraj@gmail.com
        </Icon>
        <Icon>
          <FontAwesomeIcon icon={faPhone} />
          +91-8825790748
        </Icon>
        <Icon>
          <FontAwesomeIcon icon={faLocationDot} />
          Chennai, India
        </Icon>
        <Icon>
          <FontAwesomeIcon icon={faLanguage} />
          Tamil, English
        </Icon>
      </div>
    </AboutContainer>
  );
};

export default About;

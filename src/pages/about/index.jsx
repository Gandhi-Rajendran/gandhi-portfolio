import { AboutContainer, Icon, InfoDiv } from "./about.styled";
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
        <h2>About</h2>
        <p>
          Hi 👋 I'm <b>Gandhi</b>, Experienced Software Engineer with expertise
          in versatile technologies involving in Front-end developer and I
          created successful applications that are Fast, Easy to use, Responsive
          and built with best practices.
        </p>
        <p>
          Constantly Embracing new Technology and Teach aspiring developers and
          a work in progress.
        </p>
      </div>
      <InfoDiv>
        <h2>Basic Information</h2>
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
      </InfoDiv>
    </AboutContainer>
  );
};

export default About;

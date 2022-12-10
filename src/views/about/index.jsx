import { AboutContainer, Icon } from "./about.styled";
import { AiOutlineCalendar } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { MdLocationOn, MdWavingHand } from "react-icons/md";
import { FaLanguage } from "react-icons/fa";

const About = () => {
  return (
    <AboutContainer id="about">
      <section>
        <h1>About</h1>
        <p>
          Hi, I'm <b>Gandhi</b>, Experienced Web application Developer and
          create successful applications that are fast, easy to use, and built
          with best practices.
        </p>
        <p>Constantly Embracing new Techs and</p>
      </section>
      <section>
        <h1>Basic Information</h1>
        <div>
          <AiOutlineCalendar />
          09 November, 1997
        </div>
        <div>
          <HiOutlineMail />
          ksrmgandhiraj@gmail.com
        </div>
        <div>
          <MdLocationOn />
          Chennai, India
        </div>
        <div>
          <FaLanguage />
          Tamil,English
        </div>
      </section>
    </AboutContainer>
  );
};

export default About;

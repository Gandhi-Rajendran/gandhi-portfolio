import { Typewriter } from "react-simple-typewriter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faGithub,
  faLinkedinIn,
  faSkype,
} from "@fortawesome/free-brands-svg-icons";
import {
  A,
  AnchorButton,
  Button,
  ButtonDiv,
  HomeContainer,
  LogoFooter,
  Main,
} from "./home.styled";

const Home = () => {
  return (
    <HomeContainer id="home">
      <Main>
        <h1>Gandhi Rajendran</h1>
        <p>
          I'm a{" "}
          <span>
            <Typewriter
              words={["Front End Developer", "React Developer"]}
              loop
              cursor
              typeSpeed={150}
              deleteSpeed={150}
              delaySpeed={1000}
            />
          </span>
        </p>
        <ButtonDiv>
          <AnchorButton href="#contact">Get in touch</AnchorButton>
          <AnchorButton
            href="https://drive.google.com/file/d/1LuzuBiCuS-C36zq90gh9SRNGMqv5jNGt/view?usp=sharing"
            target="blank"
          >
            Resume
          </AnchorButton>
        </ButtonDiv>
      </Main>
      <LogoFooter>
        <A
          href="https://www.linkedin.com/in/gandhiraj97"
          target="blank"
          bgColor={`linkedIn`}
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </A>
        <A
          href="https://github.com/Gandhi-Rajendran"
          target="blank"
          bgColor={`github`}
        >
          <FontAwesomeIcon icon={faGithub} />
        </A>
        <A
          href="skype:live:.cid.a56f008c22110a?chat"
          target="blank"
          bgColor={`skype`}
        >
          <FontAwesomeIcon icon={faSkype} />
        </A>
        <A
          href="https://discord.com/channels/GandhiRaj#5210"
          target="blank"
          bgColor={`discord`}
        >
          <FontAwesomeIcon icon={faDiscord} />
        </A>
      </LogoFooter>
    </HomeContainer>
  );
};

export default Home;

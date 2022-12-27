import { Typewriter } from "react-simple-typewriter";
import { Button, HomeContainer, LogoFooter, Main } from "./home.styled";
import { GrLinkedinOption } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";
import { GrSkype } from "react-icons/gr";
import { SiDiscord } from "react-icons/si";

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
        <div>
          <Button>
            <a href="#contact">Get in touch</a>
          </Button>
          <Button>
            <a
              href="https://drive.google.com/file/d/1LuzuBiCuS-C36zq90gh9SRNGMqv5jNGt/view?usp=share_link"
              target="blank"
            >
              Resume
            </a>
          </Button>
        </div>
      </Main>
      <LogoFooter>
        <a href="https://www.linkedin.com/in/gandhiraj97" target="blank">
          <GrLinkedinOption />
        </a>
        <a href="https://github.com/Gandhi-Rajendran" target="blank">
          <BsGithub />
        </a>
        <a href="skype:live:.cid.a56f008c22110a?chat" target="blank">
          <GrSkype />
        </a>
        <a href="https://discord.com/channels/Gandhi Raj#5210" target="blank">
          <SiDiscord />
        </a>
      </LogoFooter>
    </HomeContainer>
  );
};

export default Home;

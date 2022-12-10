import { Typewriter } from "react-simple-typewriter";
import { HomeContainer, LogoFooter } from "./home.styled";
import { GrLinkedinOption } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";
import { GrSkype } from "react-icons/gr";
import { SiDiscord } from "react-icons/si";

const Home = () => {
  return (
    <HomeContainer id="home">
      <main>
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
      </main>

      <LogoFooter>
        <a href="https://www.linkedin.com/in/gandhiraj97" target="blank">
          <GrLinkedinOption size={18} />
        </a>
        <a href="https://github.com/Gandhi-Rajendran" target="blank">
          <BsGithub size={18} />
        </a>
        <a href="skype:live:.cid.a56f008c22110a?chat" target="blank">
          <GrSkype size={18} />
        </a>
        <a href="https://discord.com/channels/Gandhi Raj#5210" target="blank">
          <SiDiscord size={18} />
        </a>
      </LogoFooter>
    </HomeContainer>
  );
};

export default Home;

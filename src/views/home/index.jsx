import { Typewriter } from "react-simple-typewriter";
import { HomeContainer, LogoFooter } from "./home.styled";
import { GrLinkedinOption } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

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
        {/* <a href="mailto:ksrmgandhiraj@gmail.com" target="blank">
          <FiMail size={18} />
        </a> */}
      </LogoFooter>
    </HomeContainer>
  );
};

export default Home;

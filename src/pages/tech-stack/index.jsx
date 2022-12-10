import { TechStackContainer } from "./techStack.styled";
import htmlLogo from "../../assets/images/htmlLogo.svg";
import cssLogo from "../../assets/images/cssLogo.svg";
import javascriptLogo from "../../assets/images/javascriptLogo.svg";
import typescriptLogo from "../../assets/images/typescriptLogo.svg";
import reactLogo from "../../assets/images/reactLogo.svg";
import reduxLogo from "../../assets/images/reduxLogo.svg";
import reactHookFormLogo from "../../assets/images/reactHookFormLogo.png";
import reactQueryLogo from "../../assets/images/reactQueryLogo.svg";
import sassLogo from "../../assets/images/sassLogo.svg";
import styledComponentsLogo from "../../assets/images/styledComponentsLogo.png";
import githubLogo from "../../assets/images/githubLogo.svg";
import sonarQubeLogo from "../../assets/images/sonarQubeLogo.svg";

const TechStack = () => {
  return (
    <TechStackContainer id="tech-stack">
      <h1>Tech Stack</h1>
      <p>
        These are the few Technologies , languages and frameworks that i grind
        on a regular basis..
      </p>
      <main>
        <div>
          <img src={htmlLogo} alt="htmlLogo" />
          <p>HTML 5</p>
        </div>
        <div>
          <img src={cssLogo} alt="cssLogo" />
          <p>CSS 3</p>
        </div>
        <div>
          <img src={javascriptLogo} alt="javascriptLogo" />
          <p>Javascript</p>
        </div>
        <div>
          <img src={typescriptLogo} alt="typescriptLogo" />
          <p>Typescript</p>
        </div>
        <div>
          <img src={reactLogo} alt="reactLogo" />
          <p>React </p>
        </div>
        <div>
          <img src={reduxLogo} alt="reduxLogo" />
          <p>Redux Toolkit</p>
        </div>
        <div>
          <img src={reactHookFormLogo} alt="reactHookFormLogo" />
          <p>React Hook Form</p>
        </div>
        <div>
          <img src={reactQueryLogo} alt="reactQueryLogo" />
          <p>React Query</p>
        </div>
        <div>
          <img src={styledComponentsLogo} alt="styledComponentsLogo" />
          <p>Styled Components</p>
        </div>
        <div>
          <img src={sassLogo} alt="sassLogo" />
          <p>Sass</p>
        </div>
        <div>
          <img src={githubLogo} alt="githubLogo" />
          <p>Github</p>
        </div>
        <div>
          <img src={sonarQubeLogo} alt="sonarQubeLogo" />
          <p>SonarQube</p>
        </div>
      </main>
    </TechStackContainer>
  );
};

export default TechStack;

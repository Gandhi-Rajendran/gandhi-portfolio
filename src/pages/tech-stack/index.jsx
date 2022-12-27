import { Main, TechStackContainer } from "./techStack.styled";
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
      <section>
        <h1>Tech Stack</h1>
        <h4>
          These are the few technologies, languages and frameworks that i grind
          on a regular basis..
        </h4>
      </section>
      <Main>
        <div>
          <img src={htmlLogo} alt="htmlLogo" />
          <span>HTML 5</span>
        </div>
        <div>
          <img src={cssLogo} alt="cssLogo" />
          <span>CSS 3</span>
        </div>
        <div>
          <img src={javascriptLogo} alt="javascriptLogo" />
          <span>Javascript</span>
        </div>
        <div>
          <img src={typescriptLogo} alt="typescriptLogo" />
          <span>Typescript</span>
        </div>
        <div>
          <img src={reactLogo} alt="reactLogo" />
          <span>React </span>
        </div>
        <div>
          <img src={reduxLogo} alt="reduxLogo" />
          <span>Redux Toolkit</span>
        </div>
        <div>
          <img src={reactHookFormLogo} alt="reactHookFormLogo" />
          <span>React Hook Form</span>
        </div>
        <div>
          <img src={reactQueryLogo} alt="reactQueryLogo" />
          <span>React Query</span>
        </div>
        <div>
          <img src={styledComponentsLogo} alt="styledComponentsLogo" />
          <span>Styled Components</span>
        </div>
        <div>
          <img src={sassLogo} alt="sassLogo" />
          <span>Sass</span>
        </div>
        <div>
          <img src={githubLogo} alt="githubLogo" />
          <span>Github</span>
        </div>
        <div>
          <img src={sonarQubeLogo} alt="sonarQubeLogo" />
          <span>SonarQube</span>
        </div>
      </Main>
      {/* <Main>
        <div>
          <img src={htmlLogo} alt="htmlLogo" />
          <span>HTML 5</span>
        </div>
        <div>
          <img src={cssLogo} alt="cssLogo" />
          <span>CSS 3</span>
        </div>
        <div>
          <img src={javascriptLogo} alt="javascriptLogo" />
          <span>Javascript</span>
        </div>
        <div>
          <img src={typescriptLogo} alt="typescriptLogo" />
          <span>Typescript</span>
        </div>
        <div>
          <img src={reactLogo} alt="reactLogo" />
          <span>React </span>
        </div>
        <div>
          <img src={reduxLogo} alt="reduxLogo" />
          <span>Redux Toolkit</span>
        </div>
        <div>
          <img src={reactHookFormLogo} alt="reactHookFormLogo" />
          <span>React Hook Form</span>
        </div>
        <div>
          <img src={reactQueryLogo} alt="reactQueryLogo" />
          <span>React Query</span>
        </div>
        <div>
          <img src={styledComponentsLogo} alt="styledComponentsLogo" />
          <span>Styled Components</span>
        </div>
        <div>
          <img src={sassLogo} alt="sassLogo" />
          <span>Sass</span>
        </div>
        <div>
          <img src={githubLogo} alt="githubLogo" />
          <span>Github</span>
        </div>
        <div>
          <img src={sonarQubeLogo} alt="sonarQubeLogo" />
          <span>SonarQube</span>
        </div>
      </Main> */}
    </TechStackContainer>
  );
};

export default TechStack;

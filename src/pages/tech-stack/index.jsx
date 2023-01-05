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
import muiLogo from "../../assets/images/muiLogo.svg";
import netlifyLogo from "../../assets/images/netlifyLogo.svg";
import firebaseLogo from "../../assets/images/firebaseLogo.svg";

const TechStack = () => {
  return (
    <TechStackContainer id="tech-stack">
      <h1>Tech Stack</h1>
      <p>
        These are the few technologies, languages and frameworks that i grind on
        a regular basis..
      </p>
      <Main>
        <div>
          <img src={htmlLogo} alt="htmlLogo" /> HTML 5
        </div>
        <div>
          <img src={cssLogo} alt="cssLogo" /> CSS 3
        </div>
        <div>
          <img src={javascriptLogo} alt="javascriptLogo" /> Javascript
        </div>
        <div>
          <img src={typescriptLogo} alt="typescriptLogo" /> Typescript
        </div>
        <div>
          <img src={reactLogo} alt="reactLogo" /> React
        </div>
        <div>
          <img src={reduxLogo} alt="reduxLogo" /> Redux Toolkit
        </div>
        <div>
          <img src={reactHookFormLogo} alt="reactHookFormLogo" /> React Hook
          Form
        </div>
        <div>
          <img src={reactQueryLogo} alt="reactQueryLogo" /> React Query
        </div>
        <div>
          <img src={muiLogo} alt="muiLogo" /> MUI
        </div>
        <div>
          <img src={styledComponentsLogo} alt="styledComponentsLogo" /> Styled
          Components
        </div>
        <div>
          <img src={sassLogo} alt="sassLogo" /> Sass
        </div>
        <div>
          <img src={githubLogo} alt="githubLogo" /> Github
        </div>
        <div>
          <img src={netlifyLogo} alt="netlifyLogo" /> Netlify
        </div>
        <div>
          <img src={firebaseLogo} alt="firebaseLogo" /> Firebase
        </div>
        <div>
          <img src={sonarQubeLogo} alt="sonarQubeLogo" /> SonarQube
        </div>
      </Main>
    </TechStackContainer>
  );
};

export default TechStack;

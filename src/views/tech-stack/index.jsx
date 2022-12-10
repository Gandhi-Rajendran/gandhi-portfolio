import React from "react";
import { TechStackContainer } from "./techStack.styled";
import html from "../../assets/images/html.png";

const TechStack = () => {
  return (
    <TechStackContainer id="tech-stack">
      <h1>Tech Stack</h1>
      <main>
        <div>
          <img src={html} alt="html" />
          <p>HTML 5</p>
        </div>
        <div>
          <img src={html} alt="html" />
          <p>HTML 5</p>
        </div>
        <div>
          <img src={html} alt="html" />
          <p>HTML 5</p>
        </div>
        <div>
          <img src={html} alt="html" />
          <p>HTML 5</p>
        </div>
        <div>
          <img src={html} alt="html" />
          <p>HTML 5</p>
        </div>
        <div>
          <img src={html} alt="html" />
          <p>HTML 5</p>
        </div>
        <div>
          <img src={html} alt="html" />
          <p>HTML 5</p>
        </div>
        <div>
          <img src={html} alt="html" />
          <p>HTML 5</p>
        </div>
        <div>
          <img src={html} alt="html" />
          <p>HTML 5</p>
        </div>
      </main>
    </TechStackContainer>
  );
};

export default TechStack;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  ProjectContainer,
  ProjectBody,
  OverLay,
  ProjectCard,
  DIV,
  Content,
  Section,
} from "./project.styled";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import personalWebsite from "../../assets/images/personalWebsite.png";
import eliteNetwork from "../../assets/images/eliteNetwork.png";
import blogger from "../../assets/images/blogger.png";

const Project = () => {
  const PROJECT_DATAS = [
    {
      projectId: 1,
      image: personalWebsite,
      alt: "personalWebsite.png",
      title: "Personal Website",
      details: "A Elegant Portfolio to enhance my personal traits and skill",
      tech: "ReactJS, Styled Components",
      viewLink: "#home",
      sourceLink: "https://github.com/Gandhi-Rajendran/gandhi-Website",
    },
    {
      projectId: 2,
      image: eliteNetwork,
      alt: "eliteNetwork.png",
      title: "Elite Network",
      details:
        "Elite Network Authorization. Authorized user only can logged in. we can register and entered in.",
      tech: "ReactJS, Styled Components, React Hook Forms",
      viewLink: "https://gandhi-rajendran.github.io/elite-network/",
      sourceLink: "https://github.com/Gandhi-Rajendran/elite-network",
    },
    {
      projectId: 3,
      image: blogger,
      alt: "blogger.png",
      title: "Blogger",
      details: "Simple CRUD operations using JSON server",
      tech: "ReactJS, Render and Netlify",
      viewLink: "https://the-react-blogger.netlify.app/blogs",
      sourceLink: "https://github.com/Gandhi-Rajendran/blogger",
    },
  ];

  return (
    <ProjectContainer id="project">
      <h1>Projects</h1>
      <ProjectBody>
        {PROJECT_DATAS.map((data) => (
          <ProjectCard key={data.projectId}>
            <img src={data.image} alt={data.alt} />
            <Content>
              <h2>{data.title}</h2>
              <p>{data.details}</p>
              <p>
                <b>Tech : </b>
                {data.tech}
              </p>
            </Content>
            <OverLay className="overlay">
              <DIV>
                <Section>
                  <a href={data.viewLink} target="blank" title="View Live">
                    <FontAwesomeIcon icon={faRocket} />
                  </a>
                  <span>View</span>
                </Section>
                <Section>
                  <a href={data.sourceLink} target="blank" title="View Source">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <span>Source</span>
                </Section>
              </DIV>
              <p className="title">{data.title.toLocaleUpperCase()}</p>
            </OverLay>
          </ProjectCard>
        ))}
      </ProjectBody>
    </ProjectContainer>
  );
};

export default Project;

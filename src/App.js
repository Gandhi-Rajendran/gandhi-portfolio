import { useEffect, useRef, useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./utils/theme";
import Header from "./components/header";
import Home from "./pages/home";
import Layout from "./layout";
import About from "./pages/about";
import Contact from "./pages/contact";
import TechStack from "./pages/tech-stack";
import Project from "./pages/project";
import { Container } from "./layout/layout.styled";

const App = () => {
  const [theme, setTheme] = useState(lightTheme);

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Header />
        <Container>
          <Home />
          <About />
          <Project />
          <TechStack />
          <Contact />
        </Container>
      </Layout>
    </ThemeProvider>
  );
};

export default App;

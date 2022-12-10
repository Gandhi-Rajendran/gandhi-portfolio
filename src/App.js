import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./utils/theme";
import Header from "./components/header";
import Home from "./views/home";
import About from "./views/about";
import Contact from "./views/contact";
import TechStack from "./views/tech-stack";

const App = () => {
  const [theme, setTheme] = useState(lightTheme);

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Home />
      <About />
      <TechStack />
      <Contact />
    </ThemeProvider>
  );
};

export default App;

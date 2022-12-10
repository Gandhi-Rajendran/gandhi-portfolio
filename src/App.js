import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./utils/theme";
import Header from "./components/header";
import Home from "./pages/home";
import Layout from "./layout";
// import About from "./pages/about";
// import Contact from "./pages/contact";
// import TechStack from "./pages/tech-stack";

const App = () => {
  const [theme, setTheme] = useState(lightTheme);

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        {/* <Header /> */}
        <Home />
        {/* <About /> */}
        {/* <TechStack /> */}
        {/* <Contact /> */}
      </Layout>
    </ThemeProvider>
  );
};

export default App;

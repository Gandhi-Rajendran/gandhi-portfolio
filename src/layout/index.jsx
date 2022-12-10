import Header from "../components/header";
import Content from "./content";
import { LayoutContainer } from "./layout.styled";

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <Header />
      <Content>{children}</Content>
    </LayoutContainer>
  );
};

export default Layout;

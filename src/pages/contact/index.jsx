import ContactCard from "../../components/contact-card";
import { ContactContainer, Footer } from "./contact.styled";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram, BsTwitter } from "react-icons/bs";

const Contact = () => {
  return (
    <ContactContainer id="contact">
      <h1>Contact</h1>
      <main>
        <ContactCard />
      </main>
      <Footer>
        <div>
          <a href="http://www.facebook.com/ksrgandhi" target="blank">
            <FaFacebookF />
          </a>
          <a href="http://instagram.com/_u/gandhi_ksr" target="blank">
            <BsInstagram />
          </a>
          <a href="https://twitter.com/Gandhiraj97" target="blank">
            <BsTwitter />
          </a>
        </div>
        <p>Ⓒ Gandhi Rajendran</p>
      </Footer>
    </ContactContainer>
  );
};

export default Contact;

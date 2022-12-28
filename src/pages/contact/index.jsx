import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import ContactCard from "../../components/contact-card";
import { A, ContactContainer, Footer } from "./contact.styled";

const Contact = () => {
  return (
    <ContactContainer id="contact">
      <h1>Contact</h1>
      <main>
        <ContactCard />
      </main>
      <Footer>
        <div>
          <A href="http://www.facebook.com/ksrgandhi" target="blank">
            <FontAwesomeIcon icon={faFacebookF} />
          </A>
          <A href="http://instagram.com/_u/gandhi_ksr" target="blank">
            <FontAwesomeIcon icon={faInstagram} />
          </A>
          <A href="https://twitter.com/Gandhiraj97" target="blank">
            <FontAwesomeIcon icon={faTwitter} />
          </A>
        </div>
        <p>Ⓒ Gandhi Rajendran</p>
      </Footer>
    </ContactContainer>
  );
};

export default Contact;

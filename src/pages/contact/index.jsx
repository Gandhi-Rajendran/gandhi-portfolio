import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import ContactCard from "../../components/contact-card";
import { A, ContactContainer, Footer, Social } from "./contact.styled";

const Contact = () => {
  return (
    <>
      <ContactContainer id="contact">
        <ContactCard />
        <Footer>
          <Social>
            <A
              href="http://www.facebook.com/ksrgandhi"
              target="blank"
              bgColor={"facebook"}
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </A>
            <A
              href="http://instagram.com/_u/gandhi_ksr"
              target="blank"
              bgColor={"instagram"}
            >
              <FontAwesomeIcon icon={faInstagram} />
            </A>
            <A
              href="https://twitter.com/Gandhiraj97"
              target="blank"
              bgColor={"twitter"}
            >
              <FontAwesomeIcon icon={faTwitter} />
            </A>
          </Social>
          <p>2022 Ⓒ Gandhi Rajendran</p>
        </Footer>
      </ContactContainer>
    </>
  );
};

export default Contact;

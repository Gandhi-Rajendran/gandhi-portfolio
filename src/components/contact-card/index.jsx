import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faComment,
  faHandshake,
  faLaptopCode,
  faPhone,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { ContactCardContainer, ContactDiv, H1 } from "./contactCard.styled";

const ContactCard = () => {
  return (
    <ContactCardContainer>
      <H1>Hey Folks!</H1>
      <p>
        <FontAwesomeIcon icon={faUserTie} /> I'm Looking for a job opportunity
      </p>
      <p>
        <FontAwesomeIcon icon={faLaptopCode} />
        Got a project would like me to work on?
      </p>
      <p>
        <FontAwesomeIcon icon={faComment} /> I'd Love to hear from you
      </p>
      <p>
        <FontAwesomeIcon icon={faHandshake} />
        Want to get in touch? Here's how you can reach me...
      </p>
      <ContactDiv>
        <section>
          <span>
            <FontAwesomeIcon icon={faPhone} /> Call /{" "}
            <FontAwesomeIcon icon={faWhatsapp} /> Whatsapp
          </span>
          <p>+91-8825790748</p>
        </section>
        <section>
          <span>
            <FontAwesomeIcon icon={faEnvelope} /> Email
          </span>
          <p>ksrmgandhiraj@gmail.com</p>
        </section>
      </ContactDiv>
    </ContactCardContainer>
  );
};

export default ContactCard;

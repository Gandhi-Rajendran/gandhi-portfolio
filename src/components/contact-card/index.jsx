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
import { CardContainer, ContactCardContainer } from "./contactCard.styled";

const ContactCard = () => {
  return (
    <ContactCardContainer>
      <h1>Hey Folks!</h1>
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
      <div>
        <span>
          <h3>
            <FontAwesomeIcon icon={faPhone} />
            Call /
            <FontAwesomeIcon icon={faWhatsapp} />
            Whatsapp
          </h3>
          <p>+91-8825790748</p>
        </span>
        <span>
          <h3>
            <FontAwesomeIcon icon={faEnvelope} />
            Email
          </h3>
          <p>ksrmgandhiraj@gmail.com</p>
        </span>
      </div>
    </ContactCardContainer>
  );
};

export default ContactCard;

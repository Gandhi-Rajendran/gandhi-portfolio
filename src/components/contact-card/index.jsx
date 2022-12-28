import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { ContactCardContainer } from "./contactCard.styled";
import { CardContainer } from "./contactCard.styled";

const ContactCard = () => {
  return (
    <ContactCardContainer>
      <ul>
        <li>I'd Love to hear from you</li>
        <li>Got a project would like me to work on?</li>
        <li>Want to get in touch? Here's how you can reach me...</li>
      </ul>
      <CardContainer>
        <div>
          <h3>
            <FontAwesomeIcon icon={faPhone} />
            Call /
            <FontAwesomeIcon icon={faWhatsapp} />
            Whatsapp
          </h3>
          <p>+91-8825790748</p>
        </div>
        <div>
          <h3>
            <FontAwesomeIcon icon={faEnvelope} />
            Email
          </h3>
          <p>ksrmgandhiraj@gmail.com</p>
        </div>
      </CardContainer>
    </ContactCardContainer>
  );
};

export default ContactCard;

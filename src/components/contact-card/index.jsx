import React from "react";
import { ContactCardContainer } from "./contactCard.styled";
import { FaPhoneAlt } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
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
            <FaPhoneAlt />
            Call /
            <BsWhatsapp />
            Whatsapp
          </h3>
          <p>+91-8825790748</p>
        </div>
        <div>
          <h3>
            <HiOutlineMail />
            Email
          </h3>
          <p>ksrmgandhiraj@gmail.com</p>
        </div>
      </CardContainer>
    </ContactCardContainer>
  );
};

export default ContactCard;

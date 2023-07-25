import { FC } from "react";
import { IContactCard } from "./types";

const ContactCard: FC<IContactCard> = ({ contact }: IContactCard) => {
  return (
    <div>
      <div>
        <p>{contact.name}</p>
        <p>{contact.lastName}</p>
        <p>{contact.date}</p>
        <p>{contact.number}</p>
      </div>
    </div>
  );
};

export default ContactCard;

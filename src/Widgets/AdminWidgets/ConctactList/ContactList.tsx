import ContactCard from "../../../Entities/AdminEntities/ContactCard/ContactCard";
import { IContact } from "../../../Entities/AdminEntities/ContactCard/types";
// import { useGetContactListQuery } from "./ContactListQuery";

const ContactList = () => {
  // const { data: contats } = useGetContactListQuery("");

  const contacts: IContact[] = [
    {
      id: 1,
      name: "Alibek",
      lastName: "Sydygaliev",
      number: "0501-393-121",
      date: "10-10-2023",
    },
  ];
  return (
    <div>
      {contacts.map((contact) => (
        <ContactCard key={contact.id} contact={contact} />
      ))}
    </div>
  );
};

export default ContactList;

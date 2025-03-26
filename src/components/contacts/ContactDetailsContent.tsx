import { Contact } from "./contacts.types";

const ContactDetailsContent = ({ contact }: { contact: Contact }) => {
    return (
      <div className="mx-auto grid grid-cols-[auto_1fr] gap-y-1 gap-x-[36.5px] text-sm text-left w-[220px] text-[#757575]">
        <div className="font-medium pr-2 text-right">Name:</div>
        <div>{contact.name} {contact.surname}</div>
  
        <div className="font-medium pr-2 text-right">City:</div>
        <div>{contact.city}</div>
  
        <div className="font-medium pr-2 text-right">Email:</div>
        <div>
          <a href={`mailto:${contact.email}`} className="text-[#2196F3]">
            {contact.email}
          </a>
        </div>
  
        <div className="font-medium pr-2 text-right">Phone:</div>
        <div>{contact.phone}</div>
      </div>
    );
  };

  export default ContactDetailsContent;
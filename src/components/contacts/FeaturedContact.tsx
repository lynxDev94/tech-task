import { FeaturedContactProps } from "./contacts.types";
import { getPhotoForContact } from "./contacts.deps";
import ContactDetailsContent from "./ContactDetailsContent";

const FeaturedContact = ({ contact }: FeaturedContactProps) => {
  if (!contact) return <div className="pl-[18px]">No contact selected</div>;

  const photoSrc = getPhotoForContact(contact.name);
  const fullName = `${contact.name} ${contact.surname?.[0]}.`;

  return (
    <div className="bg-white shadow-lg rounded-md w-[330px] h-[340px] ml-[18px] font-roboto">
      <img
        src={photoSrc}
        alt={`${fullName} photo`}
        className="w-full h-[183px] object-cover object-center rounded-t-sm"
      />
      <div className="p-4 text-center">
        <h2 className="text-xl font-semibold mb-2">{fullName}</h2>
        <ContactDetailsContent contact={contact} />
      </div>
    </div>
  );
};

export default FeaturedContact;

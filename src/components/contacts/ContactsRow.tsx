import { VisibilityIcon } from "@/assets";
import { ContactRowProps } from "./contacts.types";

const ContactRow = ({
  contact,
  visibleColumns,
  onClick,
  separatorImg,
}: ContactRowProps) => {
  return (
    <tr
      key={contact.id}
      className="border border-b-black/10 border-b-2 border-r-0 border-l-0 border-t-0 last:border-b-0 hover:bg-gray-50 cursor-pointer transition"
      onClick={() => onClick(contact.id)}
    >
      {visibleColumns.name && (
        <td className="py-[16px] pl-[16px] w-[175px] flex items-center justify-between">
          <div className="flex items-center">
            {contact.name} {contact.surname?.[0]}.
          </div>
          <img src={separatorImg} alt="separator image" />
        </td>
      )}
      {visibleColumns.city && (
        <td className="py-[16px] pl-[16px] w-[175px]">
          <div className="flex items-center justify-between whitespace-nowrap">
            <span>{contact.city}</span>
            <img src={separatorImg} alt="separator image" />
          </div>
        </td>
      )}
      <td className="relative w-[61px] px-[16px] py-[16px]">
        <div className="flex justify-center">
          {contact.isActive && (
            <img src={VisibilityIcon} alt="visibility icon" />
          )}
        </div>
        <img
          src={separatorImg}
          alt="separator image"
          className="absolute right-0 top-1/2 -translate-y-1/2"
        />
      </td>
      {visibleColumns.email && (
        <td className="py-[16px] pl-[16px] h-[56px] w-[261px]">
          <div className="flex items-center justify-between whitespace-nowrap">
            <span>{contact.email}</span>
            <img src={separatorImg} alt="separator image" />
          </div>
        </td>
      )}
      {visibleColumns.phone && (
        <td className="py-[16px] pl-[16px] w-[175px] flex items-center justify-end">
          <span>{contact.phone}</span>
        </td>
      )}
    </tr>
  );
};

export default ContactRow;

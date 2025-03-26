import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  useGetContactsByIdQuery,
  useGetContactsQuery,
} from "@/state/contacts/contactsApiSlice";
import { setSelectedId } from "@/state/contacts/contactsUiSlice";
import { RootState } from "@/state/store";
import { Contact } from "./contacts.types";
import ContactsTable from "./ContactsTable";
import FeaturedContact from "./FeaturedContact";
import Filter from "./Filter";

const ContactsLayout = () => {
  const dispatch = useDispatch();
  const selectedId = useSelector((state: RootState) => state.ui.selectedId);
  const filters = useSelector((state: RootState) => state.ui.filters);

  const { data: contacts, isLoading, isError } = useGetContactsQuery({});
  const { data: selectedContact } = useGetContactsByIdQuery(
    { id: selectedId ?? "" },
    { skip: !selectedId }
  );
  const filteredContacts = useMemo(() => {
    if (!contacts) return [];

    return contacts.filter((contact: Contact) => {
      const matchName = contact.name
        .toLowerCase()
        .includes(filters.name.toLowerCase());
      const matchCity = filters.city ? contact.city === filters.city : true;
      const matchActive = filters.active ? true : contact.isActive === false;

      return matchName && matchCity && matchActive;
    });
  }, [contacts, filters]);

  useEffect(() => {
    if (!selectedId && contacts?.length) {
      dispatch(setSelectedId(contacts[0].id));
    }
  }, [selectedId, contacts, dispatch]);

  function handleSelectContact(id: string) {
    dispatch(setSelectedId(id));
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !contacts) {
    return <div>Error loading contacts</div>;
  }

  return (
    <>
      <Filter allContacts={contacts} filters={filters} />
      <div className="pl-[36px] -mt-[28px] flex">
        <div className="max-w-[905px] w-full">
          <ContactsTable
            contacts={filteredContacts}
            onSelectContact={handleSelectContact}
          />
        </div>
        <FeaturedContact contact={selectedContact ?? null} />
      </div>
    </>
  );
};

export default ContactsLayout;

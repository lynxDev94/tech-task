import { useState, useMemo } from "react";
import {
  Menu,
  MenuActive,
  Separator,
  VisibilityIconWhite,
} from "@/assets/index.js";
import { ColumnDropdown } from "./columnToggle/ColumnDropdown.tsx";
import {
  ContactsTableProps,
  SortColumn,
  SortDirection,
} from "./contacts.types.ts";
import ContactRow from "./ContactsRow.tsx";
import TableHeaderCell from "./TableHeaderCell.tsx";
import { sortContacts } from "./contacts.deps.ts";

function ContactsTable({ contacts, onSelectContact }: ContactsTableProps) {
  const [visibleColumns, setVisibleColumns] = useState({
    name: true,
    city: true,
    email: true,
    phone: true,
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [sortColumn, setSortColumn] = useState<SortColumn>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");

  const onSortByName = () => {
    if (sortColumn === "name") {
      setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortColumn("name");
      setSortDirection("asc");
    }
  };

  const onSortByCity = () => {
    if (sortColumn === "city") {
      setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortColumn("city");
      setSortDirection("asc");
    }
  };

  const sortedContacts = useMemo(() => {
    return sortContacts(contacts, sortColumn, sortDirection);
  }, [contacts, sortColumn, sortDirection]);

  return (
    <div
      className={`overflow-hidden font-roboto bg-white shadow-lg rounded-md transition-all duration-300 ${
        isDropdownOpen && "min-h-[245px]"
      }`}
    >
      <table className="min-w-full text-left border-collapse">
        <thead>
          <tr className="bg-[#2196F3] text-white">
            {visibleColumns.name && (
              <TableHeaderCell
                label="Name"
                sortable
                isSorted={sortColumn === "name"}
                direction={sortDirection}
                onClick={onSortByName}
              />
            )}

            {visibleColumns.city && (
              <TableHeaderCell
                label="City"
                sortable
                isSorted={sortColumn === "city"}
                direction={sortDirection}
                onClick={onSortByCity}
              />
            )}
            <th className="relative w-[61px] px-[16px] py-[16px]">
              <div className="flex justify-center max-h-full max-wfull">
                <img
                  src={VisibilityIconWhite}
                  className="max-w-none"
                  alt="visibility icon"
                />
              </div>

              <img
                src={Separator}
                alt="Column Separator"
                className="absolute right-0 top-1/2 -translate-y-1/2"
              />
            </th>
            {visibleColumns.email && <TableHeaderCell label="Email" />}
            {visibleColumns.phone && (
              <TableHeaderCell
                label="Phone"
                className="justify-end"
                labelStyle="pr-[16px]"
              />
            )}
            <th className="p-0 h-[56px] w-[56px] align-middle text-center relative">
              <div
                className={`overflow-hidden flex h-full items-center justify-center cursor-pointer ${
                  isDropdownOpen ? "bg-white" : ""
                }`}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <img src={isDropdownOpen ? MenuActive : Menu} alt="Menu" />
              </div>
              {isDropdownOpen && (
                <ColumnDropdown
                  visibleColumns={visibleColumns}
                  setVisibleColumns={setVisibleColumns}
                />
              )}
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedContacts.map((contact) => (
            <ContactRow
              key={contact.id}
              contact={contact}
              visibleColumns={visibleColumns}
              onClick={onSelectContact}
              separatorImg={Separator}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ContactsTable;

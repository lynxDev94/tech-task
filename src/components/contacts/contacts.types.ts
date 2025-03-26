import {
  Julian,
  Eleanor,
  Herbert,
  Howard,
  Keith,
  Lenora,
  Marie,
  Timothy,
  Willie,
  Blanche,
} from "@/assets/index.js";

export const contactPhotos: Record<string, string> = {
  Julian: Julian,
  Eleanor: Eleanor,
  Herbert: Herbert,
  Howard: Howard,
  Keith: Keith,
  Lenora: Lenora,
  Marie: Marie,
  Timothy: Timothy,
  Blanche: Blanche,
  Willie: Willie,
};

export type Contact = {
  city: string;
  email: string;
  id: string;
  isActive: boolean;
  name: string;
  phone: string;
  surname: string;
};

export type TableHeaderCellProps = {
  label: string;
  sortable?: boolean;
  isSorted?: boolean;
  direction?: "asc" | "desc";
  className?: string,
  labelStyle?: string,
  onClick?: () => void;
  showSeparator?: boolean;
};

export type Filters = {
  name: string;
  city: string;
  active: boolean;
};

export type FilterProps = {
  allContacts: Contact[];
  filters?: Filters;
  onFilterChange?: React.Dispatch<React.SetStateAction<Filters>>;
};

export type ContactRowProps = {
  contact: Contact;
  visibleColumns: Record<string, boolean>;
  onClick: (id: string) => void;
  separatorImg: string;
};

export type FeaturedContactProps = {
  contact: Contact | null;
};

export type SortColumn = "name" | "city" | null;
export type SortDirection = "asc" | "desc";
export type City =
  | "Gorouso"
  | "Gugdivo"
  | "Jurajoba"
  | "Cepcoew"
  | "Resokboh"
  | "Pidjapal"
  | "Kodbimde"
  | "Iliobcan"
  | "Vowufni"
  | "Wefoibi";

export type ContactsTableProps = {
  contacts: Contact[];
  onSelectContact: (id: string) => void;
}

export type ColumnDropdownProps = {
  visibleColumns: Record<string, boolean>;
  setVisibleColumns: React.Dispatch<
    React.SetStateAction<{
      name: boolean;
      city: boolean;
      email: boolean;
      phone: boolean;
    }>
  >;
};

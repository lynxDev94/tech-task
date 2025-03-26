
import { Contact, contactPhotos } from "./contacts.types";

export const getUniqueCities = (contacts: { city: string }[]) => {
  return [...new Set(contacts.map((c) => c.city))];
};

export const getPhotoForContact = (name: string) =>
  contactPhotos[name] || contactPhotos["Blanche"];

export function sortContacts(contacts: Contact[], column: string | null, direction: "asc" | "desc") {
  const sorted = [...contacts];
  if (column === "name" || column === "city") {
    sorted.sort((a, b) => a[column].localeCompare(b[column]));
    if (direction === "desc") sorted.reverse();
  }
  return sorted;
}
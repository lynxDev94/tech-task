import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import ContactsTable from "../ContactsTable";

const mockContacts = [
  {
    id: "1",
    name: "Metaguy",
    surname: "MetaLastName",
    city: "Vilnius",
    email: "metasite@mail.com",
    phone: "123456789",
    isActive: true,
  },
];

describe("ContactsTable", () => {
  it("renders contact data", () => {
    render(
      <ContactsTable contacts={mockContacts} onSelectContact={() => {}} />
    );

    expect(screen.getByText("Metaguy M.")).toBeInTheDocument();
    expect(screen.getByText("Vilnius")).toBeInTheDocument();
    expect(screen.getByText("metasite@mail.com")).toBeInTheDocument();
  });

  it("call on onSelectContact", () => {
    const onSelectMock = vi.fn();

    render(
      <ContactsTable contacts={mockContacts} onSelectContact={onSelectMock} />
    );

    const row = screen.getByText("Metaguy M.").closest("tr");
    fireEvent.click(row!);

    expect(onSelectMock).toHaveBeenCalledWith("1");
  });

  it("toggles visibility of a column from the dropdown", () => {
    render(
      <ContactsTable contacts={mockContacts} onSelectContact={() => {}} />
    );

    const menuButton = screen.getByAltText("Menu");
    fireEvent.click(menuButton);

    const emailToggle = screen.getByLabelText(/email/i);
    fireEvent.click(emailToggle);

    expect(screen.queryByText(mockContacts[0].email)).not.toBeInTheDocument();
  });
});

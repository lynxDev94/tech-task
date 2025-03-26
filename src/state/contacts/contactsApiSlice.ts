import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Contact } from "@/components/contacts/contacts.types";

export const contactsApiSlice = createApi({
  reducerPath: "contacts",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://frontend-task-api.metasite.lt/api",
  }),
  endpoints: (builder) => {
    return {
      getContacts: builder.query({
        query: () => "/contacts",
      }),
      getContactsById: builder.query<Contact, {id: string}>({
        query: ({id}) => `/contacts/${id}`,
      }),
    };
  },
});

export const { useGetContactsQuery, useGetContactsByIdQuery } = contactsApiSlice;

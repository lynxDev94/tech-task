import { configureStore } from "@reduxjs/toolkit";
import { contactsApiSlice } from "./contacts/contactsApiSlice";
import uiReducer from "../state/contacts/contactsUiSlice";


export const store = configureStore({
    reducer: {
        ui: uiReducer,
        [contactsApiSlice.reducerPath] : contactsApiSlice.reducer
    },
    middleware: (getDefaultMiddleWare) => {
        return getDefaultMiddleWare().concat(contactsApiSlice.middleware)
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
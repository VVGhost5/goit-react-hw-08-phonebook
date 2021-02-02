import { createSelector } from "@reduxjs/toolkit";

const getContacts = (state) => state.app.contacts;
const getFilter = (state) => state.app.filter;
const getIsLoading = (state) => state.app.loading;

const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((el) =>
      el.name.toLowerCase().includes(normalizedFilter)
    );
  }
);

const appSelectors = {
  getContacts,
  getFilter,
  getIsLoading,
  getVisibleContacts,
};

export default appSelectors;

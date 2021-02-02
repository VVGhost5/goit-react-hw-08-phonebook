import {
  addContactSuccess,
  addContactError,
  addContactRequest,
  deleteContactSuccess,
  deleteContactError,
  deleteContactRequest,
  fetchContactError,
  fetchContactRequest,
  fetchContactSuccess,
} from "./app-actions";
import axios from "axios";

const fetchContacts = () => async (dispatch) => {
  dispatch(fetchContactRequest());

  try {
    const { data } = await axios.get("/contacts");
    dispatch(fetchContactSuccess(data));
  } catch (error) {
    dispatch(fetchContactError(error.message));
  }
};

const addContact = ({ name, number }) => async (dispatch) => {
  const Contact = {
    name,
    number,
  };
  dispatch(addContactRequest());

  try {
    const response = await axios.post("/contacts", Contact);
    dispatch(addContactSuccess(response.data));
  } catch (error) {
    dispatch(addContactError(error));
  }
};

const deleteContact = (id) => async (dispatch) => {
  dispatch(deleteContactRequest());

  try {
    await axios.delete(`/contacts/${id}`);
    dispatch(deleteContactSuccess(id));
  } catch (error) {
    dispatch(deleteContactError(error.message));
  }
};

const appOperations = {
  fetchContacts,
  addContact,
  deleteContact,
};

export default appOperations;

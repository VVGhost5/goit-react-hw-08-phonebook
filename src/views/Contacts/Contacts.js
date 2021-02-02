import React, { useState, useEffect } from "react";
import styles from "./Contacts.module.css";
import appOperations from "../../redux/app/app-operations";
import appSelectors from "../../redux/app/app-selectors";
import { useDispatch, useSelector } from "react-redux";
import Form from "../../components/Form/Form";
import Filter from "../../components/Filter/Filter";
import ContactsList from "../../components/ContactsList/ContactsList";

const Contacts = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(appSelectors.getIsLoading);

  useEffect(() => dispatch(appOperations.fetchContacts()), [dispatch]);

  return (
    <div className={styles.contacts}>
      <div>
        <Form />
        <Filter />
        {isLoading && <h2>Loading...</h2>}
      </div>
      <ContactsList />
    </div>
  );
};

export default Contacts;

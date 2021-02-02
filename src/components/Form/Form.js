import React, { useState } from "react";
import styles from "./Form.module.css";
import PropTypes from "prop-types";
import appOperations from "../../redux/app/app-operations";
import { useDispatch } from "react-redux";

const Form = function () {
  const dispatch = useDispatch();
  const onSubmit = (name, number) =>
    dispatch(appOperations.addContact({ name, number }));

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(name, number);
    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <div>
      <h2 className={styles.title}>Phonebook</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>
          Name
          <input
            className={styles.input}
            type="text"
            name="name"
            placeholder="Enter the name"
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
        </label>
        <label className={styles.label}>
          Number
          <input
            className={styles.input}
            type="text"
            name="number"
            placeholder="Enter the phone number"
            value={number}
            onChange={({ target }) => setNumber(target.value)}
          />
        </label>
        <button className={styles.button} onSubmit={handleSubmit}>
          Add contact
        </button>
      </form>
    </div>
  );
};

export default Form;

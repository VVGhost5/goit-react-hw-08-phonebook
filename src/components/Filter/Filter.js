import React from "react";
import styles from "./Filter.module.css";
import PropTypes from "prop-types";
import { filterContacts } from "../../redux/app/app-actions";
import { useSelector, useDispatch } from "react-redux";
import appSelectors from "../../redux/app//app-selectors";

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(appSelectors.getFilter);
  const onChange = (e) => dispatch(filterContacts(e.target.value));

  return (
    <label>
      Find contacts by name
      <input
        className={styles.input}
        type="text"
        name="filter"
        placeholder="Find contact"
        value={value}
        onChange={onChange}
      ></input>
    </label>
  );
};

export default Filter;

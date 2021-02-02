import React from "react";
import styles from "./Register.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import authOperations from "../../redux/auth/auth-operations";

const Register = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName("");
    setPassword("");
    setEmail("");
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        return setName(value);
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  return (
    <div className={styles.registration}>
      <h2 className={styles.title}>Registration</h2>
      <form className={styles.form} action="submit" onSubmit={handleSubmit}>
        <div className={styles.inputBlock}>
          <label className={styles.label} htmlFor="input">
            Name
          </label>
          <input
            className={styles.input}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </div>

        <div className={styles.inputBlock}>
          <label className={styles.label} htmlFor="input">
            Email
          </label>
          <input
            className={styles.input}
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>

        <div className={styles.inputBlock}>
          <label className={styles.label} htmlFor="input">
            Password
          </label>
          <input
            className={styles.input}
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </div>

        <button className={styles.button}>Register</button>
      </form>
    </div>
  );
};

export default Register;

import React from "react";
import styles from "./Login.module.css";
import { useState } from "react";
import authOperations from "../../redux/auth/auth-operations";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputs;

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(authOperations.logIn({ email, password }));

    setInputs({
      email: "",
      password: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, ...{ [name]: value } }));
  };

  return (
    <div className={styles.login}>
      <h2 className={styles.title}>Login</h2>
      <form className={styles.form} action="submit" onSubmit={handleSubmit}>
        <div className={styles.inputBlock}>
          <label className={styles.label} htmlFor="input">
            Email
          </label>
          <input
            className={styles.input}
            name="email"
            value={email}
            onChange={handleChange}
            type="email"
          />
        </div>

        <div className={styles.inputBlock}>
          <label className={styles.label} htmlFor="input">
            Password
          </label>
          <input
            className={styles.input}
            name="password"
            value={password}
            onChange={handleChange}
            type="password"
          />
        </div>

        <button className={styles.button}>Login</button>
      </form>
    </div>
  );
};

export default Login;

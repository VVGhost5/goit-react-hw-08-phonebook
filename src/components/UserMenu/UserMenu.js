import React from "react";
import { connect, useSelector } from "react-redux";
import authSelectors from "../../redux/auth/auth-selectors";
import authOperations from "../../redux/auth/auth-operations";
import defaultAvatar from "../../images/default-avatar.png";
import styles from "./userMenu.module.css";

const UserMenu = ({ onLogout }) => {
  const name = useSelector(authSelectors.getUsername);
  const avatar = defaultAvatar;

  return (
    <div className={styles.container}>
      <img src={avatar} alt="" width="32" />
      <span className={styles.span}>Welcome, {name} ! </span>
      <button className={styles.button} type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(null, mapDispatchToProps)(UserMenu);

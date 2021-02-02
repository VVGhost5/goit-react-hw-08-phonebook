import React from "react";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";
import Navigation from "../Navigation/Navigation";
import styles from "./AppBar.module.css";
import authSelectors from "../../redux/auth/auth-selectors";
import { useSelector } from "react-redux";

const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <header className={styles.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;

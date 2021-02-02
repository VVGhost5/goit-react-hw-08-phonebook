import React from "react";
import { NavLink } from "react-router-dom";

const styles = {
  link: {
    color: "white",
    textDecoration: "none",
    fontFamily: "arial",
    fontWeight: "bold",
    paddingLeft: "10px",
    paddingRight: "10px",
  },

  activeLink: {
    borderBottom: "2px solid white",
  },
};

const AuthNav = () => {
  return (
    <div>
      <NavLink
        to="/register"
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Registration
      </NavLink>

      <NavLink
        to="/login"
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Login
      </NavLink>
    </div>
  );
};

export default AuthNav;

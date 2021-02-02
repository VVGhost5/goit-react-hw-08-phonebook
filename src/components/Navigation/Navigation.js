import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import authSelectors from "../../redux/auth/auth-selectors";

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

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <nav>
      <NavLink to="/" style={styles.link} activeStyle={styles.activeLink} exact>
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink
          to="/contacts"
          exact
          style={styles.link}
          activeStyle={styles.activeLink}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;

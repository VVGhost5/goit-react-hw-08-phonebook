import React from "react";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Wellcome to contacts by VVGhost</h2>
      <p className={styles.description}>Register, or login into your account</p>
      <img
        src="https://gadgetstouse.com/wp-content/uploads/2019/10/Backup-Contacts.png"
        alt="home"
        width="800"
        height="400"
      />
    </div>
  );
};

export default Home;

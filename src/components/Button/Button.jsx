import React from "react";
import styles from "./Button.module.css";

const Button = ({ ...props }) => {
  return (
    <button className={styles.glow_btn} type="button" {...props}>
      Get Advice
    </button>
  );
};

export default Button;

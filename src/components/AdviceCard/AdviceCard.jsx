import React from "react";
import styles from "./AdviceCard.module.css";
import { Loader } from "../";

const AdviceCard = ({ advice, loading }) => {
  return (
    <div className={styles.card_container}>
      {loading ? <Loader /> : <h2 className={styles.text}>{advice}</h2>}
    </div>
  );
};

export default AdviceCard;

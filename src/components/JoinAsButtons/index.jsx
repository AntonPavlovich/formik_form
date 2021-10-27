import React from "react";
import { Field } from "formik";
import styles from "./JoinAsButtons.module.scss";

const JoinAsButtons = (props) => {
  const { name } = props;
  return (
    <div className={styles.joinAsButtons}>
      <label className={styles.labelWrapper}>
        <Field type="radio" name={name} value="Buyer" />
        <div className={styles.textWrapper}>
          <h2>Join as a buyer</h2>
          <p>
            I am looking for a Name, Logo or Tagline for my business, brand or
            product
          </p>
        </div>
      </label>
      <label className={styles.labelWrapper}>
        <Field type="radio" name={name} value="Seller" />
        <div className={styles.textWrapper}>
          <h2>Join as a Creative or Marketplace Seller</h2>
          <p>
            I plan to submit name ideas, Logo designs or sell names in Domain
            Marketplace
          </p>
        </div>
      </label>
    </div>
  );
};

export default JoinAsButtons;

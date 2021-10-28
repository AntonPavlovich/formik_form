import React from "react";
import { Field } from "formik";

import styles from "./RememberMe.module.scss";

const RememberMe = (props) => {
  const { name } = props;
  return (
    <div className={styles.wrapper}>
      <label>
        <Field name={name} type="checkbox" />
        Remember me
      </label>

      <a
        className={styles.forgotPasswordLink}
        target='_blank'
        rel='noreferrer'
        href="https://www.dkb74.ru/stati/prostye-sovety-dlya-uluchsheniya-pamyati"
      >
        Forgot password?
      </a>
    </div>
  );
};

export default RememberMe;

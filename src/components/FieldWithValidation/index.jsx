import { ErrorMessage, Field, useField } from "formik";
import React, { useState } from "react";
import ErrMessage from "../ErrMessage";
import styles from "./FieldWithValidation.module.scss";
import cx from "classnames";

const FieldWithValidation = (props) => {
  const [,meta] = useField(props);

  const { name, placeholder } = props;

  const [isError, setIsError] = useState(false);

  const fieldClasses = cx(styles.input, {
    [styles.errStyle]: isError,
    [styles.correct] : !meta.error && meta.touched  
  });
  return (
    <div className={styles.inputWrapper}>
      <Field name={name} placeholder={placeholder} className={fieldClasses} />
      <ErrorMessage
        name={name}
        render={(msg) => <ErrMessage setIsError={setIsError} message={msg} />}
      />
    </div>
  );
};

export default FieldWithValidation;

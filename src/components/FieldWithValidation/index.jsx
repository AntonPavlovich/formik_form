import { ErrorMessage, Field } from 'formik';
import React from 'react';
import ErrMessage from '../ErrMessage';
import styles from './FieldWithValidation.module.scss'

const FieldWithValidation = (props) => {
  const {name,placeholder} = props;
  return (
    <div className={styles.inputWrapper}>
      <Field name={name} placeholder={placeholder} className={styles.input}/>
      <ErrorMessage name={name} render={msg => <ErrMessage message={msg}/>}/>
    </div>
  );
}

export default FieldWithValidation;

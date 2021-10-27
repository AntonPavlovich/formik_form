import React from 'react';
import styles from './ErrMessage.module.scss'

const ErrMessage = (props) => {
  const {message} = props;

  return (
    <p className={styles.errMessage}>
      {message}
    </p>
  );
}

export default ErrMessage;

import React, { useEffect } from 'react';
import styles from './ErrMessage.module.scss'

const ErrMessage = (props) => {
  const {message,setIsError} = props;

  useEffect(() => {
    setIsError(true)

    return () => setIsError(false)
  },[])

  return (
    <p className={styles.errMessage}>
      {message}
    </p>
  );
}

export default ErrMessage;

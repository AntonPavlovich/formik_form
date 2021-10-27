import React from 'react';
import Header from '../../components/Header';
import styles from './SignUpPage.module.scss'
const SignUpPage = (props) => {
  return (
    <>
        <Header btnLinkTo='/login' btnText='Login'/>
        <section className={styles.signup_section}>
        <h1 className={styles.heading}>create an account</h1>
      </section>
    </>
  );
}

export default SignUpPage;

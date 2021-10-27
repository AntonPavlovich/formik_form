import React from 'react';
import Header from '../../components/Header';
import styles from './LoginPage.module.scss'

const LoginPage = (props) => {
  return (
    <>
      <Header btnLinkTo='/sign_up' btnText='Signup'/>
      <section className={styles.login_section}>
        <h1 className={styles.heading}>login to your account</h1>
      </section>
    </>
  );
}

export default LoginPage;

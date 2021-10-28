import { Field, Form, Formik } from "formik";
import React from "react";
import FieldWithValidation from "../../components/FieldWithValidation";
import Header from "../../components/Header";
import RememberMe from "../../components/RememberMe";

import loginSchema from "../../schemas/loginSchema";
import styles from "./LoginPage.module.scss";

const initialValues = {
  email: "",
  password: "",
  rememberUser : false
};

const LoginPage = (props) => {
  const submitHandler = (values, formikBag) => {
    formikBag.resetForm();
  };

  return (
    <>
      <Header btnLinkTo="/sign_up" btnText="Signup" />
      <section className={styles.login_section}>
        <h1 className={styles.heading}>login to your account</h1>
        <Formik
          onSubmit={submitHandler}
          validationSchema={loginSchema}
          initialValues={initialValues}
        >
          <Form className={styles.login_form}>
            <FieldWithValidation inRow name="email" placeholder='Email' />
            <FieldWithValidation type='password' inRow name="password" placeholder='Password'/>
            <RememberMe name='rememberUser'/>
            <button type="submit" className={styles.login_btn}>
              login
            </button>
          </Form>
        </Formik>
      </section>
    </>
  );
};

export default LoginPage;

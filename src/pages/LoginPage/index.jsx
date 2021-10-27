import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import Header from "../../components/Header";

import loginSchema from "../../schemas/loginSchema";
import styles from "./LoginPage.module.scss";

const initialValues = {
  email: "",
  password: "",
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
          <Form>
            <Field name="email" className={styles.login_input} />
            <ErrorMessage name="email" />
            <Field
              name="password"
              type="password"
              className={styles.login_input}
            />
            <ErrorMessage name="password" />
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

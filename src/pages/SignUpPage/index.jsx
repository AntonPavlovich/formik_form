import React from "react";
import Header from "../../components/Header";
import styles from "./SignUpPage.module.scss";

import { Formik, Form, Field } from "formik";
import JoinAsButtons from "../../components/JoinAsButtons";

const initialValues = {
  firstName: "",
  lastName: "",
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
  joinAs : ''
};

const SignUpPage = (props) => {
  const submitHandler = (values, formikBag) => {
    console.log(values);

    formikBag.resetForm();
  };

  return (
    <>
      <Header btnLinkTo="/login" btnText="Login" />
      <section className={styles.signup_section}>
        <div className={styles.textWrapper}>
          <h1 className={styles.heading}>create an account</h1>
          <p className={styles.caption}>
            We always keep your name and email address private.
          </p>
        </div>

        <Formik initialValues={initialValues} onSubmit={submitHandler}>
          <Form className={styles.form}>
            <div className={styles.twoForms}>
              <Field
                name="firstName"
                placeholder="First name"
                className={styles.input}
              />
              <Field
                name="lastName"
                placeholder="Last name"
                className={styles.input}
              />
            </div>
            <div className={styles.twoForms}>
              <Field
                name="displayName"
                placeholder="Display name"
                className={styles.input}
              />
              <Field
                name="email"
                placeholder="Email address"
                className={styles.input}
              />
            </div>
            <div className={styles.twoForms}>
              <Field
                name="password"
                placeholder="Password"
                className={styles.input}
              />
              <Field
                name="confirmPassword"
                placeholder="Confirm password"
                className={styles.input}
              />
            </div>
            <JoinAsButtons />

            <button type="submit">Create account</button>
          </Form>
        </Formik>
      </section>
    </>
  );
};

export default SignUpPage;

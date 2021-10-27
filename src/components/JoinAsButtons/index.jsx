import React from "react";
import { Field } from "formik";

const JoinAsButtons = () => {
  return (
    <>
      <Field type="radio" name="joinAs" value="Buyer" />
      <Field type="radio" name="joinAs" value="Marketplace seller" />
    </>
  );
};

export default JoinAsButtons;

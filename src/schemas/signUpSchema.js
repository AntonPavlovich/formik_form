import * as yup from "yup";

const signUpSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  displayName: yup.string().required(),
  email: yup.string().required(),
  password: yup.string().required(),
  joinAs: yup.string().required(),
});

export default signUpSchema;

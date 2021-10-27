import * as yup from "yup";
import * as messages from './schemasMessages'

const signUpSchema = yup.object().shape({
  firstName: yup.string().required(messages.forRequired),
  lastName: yup.string().required(messages.forRequired),
  displayName: yup.string().required(messages.forRequired),
  email: yup.string().required(messages.forRequired),
  password: yup.string().required(messages.forRequired),
  confirmPassword : yup.string().required(messages.forRequired),
  joinAs: yup.string().required(messages.forRadioButtons),
});

export default signUpSchema;

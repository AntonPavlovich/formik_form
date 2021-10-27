import * as yup from "yup";
import * as messages from "./schemasMessages";

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .matches(
      /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
      messages.emailValidation
    )
    .required(messages.forRequired),
  password: yup
    .string()
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
      messages.passwordValidation
    )
    .required(messages.forRequired),
});

export default loginSchema;

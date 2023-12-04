import * as yup from "yup";

export const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email address is required"),
  password: yup.string(),
  // .min(5, "Password must be at least 5 characters")
  // .max(64, "Password cannot exceed 64 characters")
  // .required("Password is required")
  // .matches(/^(?=.*[a-z])/, "Password must include lowercase letter")
  // .matches(/^(?=.*[A-Z])/, "Password must include uppercase letter")
  // .matches(/^(?=.*[0-9])/, "Password must include digit")
  // .matches(/^(?=.*[!@#$%^&*])/, "Password must include special character"),
});

export const registerSchema = yup.object().shape({
  firstname: yup.string().required("Firstname is required"),
  lastname: yup.string().required("Lastname is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email address is required"),
  password: yup.string(),
  // .min(5, "Password must be at least 5 characters")
  // .max(64, "Password cannot exceed 64 characters")
  // .required("Password is required")
  // .matches(/^(?=.*[a-z])/, "Password must include lowercase letter")
  // .matches(/^(?=.*[A-Z])/, "Password must include uppercase letter")
  // .matches(/^(?=.*[0-9])/, "Password must include digit")
  // .matches(/^(?=.*[!@#$%^&*])/, "Password must include special character"),
});

import { isEmpty } from "lodash";
import { postRequest } from "../config/axios";
import { AxiosError, isAxiosError } from "axios";

export const login = async (credentials: object) => {
  if (isEmpty(credentials)) return new Error("Invalid Entry.");

  try {
    const response = await postRequest("auth/login", credentials);
    return response;
  } catch (error) {
    if (isAxiosError(error)) {
      const axiosError: AxiosError = error;
      return axiosError.response?.data;
    }
  }
};

export const register = async (data: object) => {
  if (isEmpty(data)) return new Error("Invalid Entry.");

  try {
    const response = await postRequest("auth/register", data);
    return response;
  } catch (error) {
    if (isAxiosError(error)) {
      const axiosError: AxiosError = error;
      return axiosError.response?.data;
    }
  }
};

export const logout = async () => {
  try {
    const response = await postRequest("auth/logout", {});
    return response;
  } catch (error) {
    if (isAxiosError(error)) {
      const axiosError: AxiosError = error;
      return axiosError.response?.data;
    }
  }
};



// export const verifySignUpCode = async (code: string) => {
//   if (isEmpty(code)) throw Error("Invalid code, please try again.");

//   try {
//     const response = await postRequest("auth/register/verify-sign-up-code", {
//       code,
//     });
//     return response;
//   } catch (error) {
//     return error.response;
//   }
// };

// export const isUniqueEmail = async (email: string) => {
//   try {
//     const response = await postRequest(
//       `auth/register/check-unique-email?email=${email}`
//     );
//     return response;
//   } catch (error) {
//     return error.response;
//   }
// };

// export const forgotPassword = async (email: string) => {
//   try {
//     const response = await postRequest(`auth/forgot-password`, { email });
//     return response;
//   } catch (error) {
//     return error.response;
//   }
// };

export const isAuthenticated = async (data: any) => {
  try {
    const response = await postRequest(`auth/authenticate-user`, data);
    return response;
  } catch (error) {
    if (isAxiosError(error)) {
      const axiosError: AxiosError = error;
      return axiosError.response?.data;
    }
  }
};

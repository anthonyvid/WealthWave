import axios from "axios";
import { getCached } from "../utils/helper";

const axiosClient = axios.create();

//All request will wait 2 seconds before timeout
axiosClient.defaults.timeout = 2000;
axiosClient.defaults.withCredentials = true;

const baseURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8080"
    : "https://your-production-url";

export function getRequest(URL: string) {
  return axiosClient
    .get(`${baseURL}/${URL}`, {
      headers: {
        Authorization: `Bearer ${getCached("token") || ""}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
    .then((response) => response);
}

export function postRequest(URL: string, payload: object) {
  return axiosClient
    .post(`${baseURL}/${URL}`, payload, {
      headers: {
        Authorization: `Bearer ${getCached("token") || ""}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
    .then((response) => response);
}

export function patchRequest(URL: string, payload: object) {
  return axiosClient
    .patch(`${baseURL}/${URL}`, payload, {
      headers: {
        Authorization: `Bearer ${getCached("token") || ""}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
    .then((response) => response);
}

export function deleteRequest(URL: string) {
  return axiosClient
    .delete(`${baseURL}/${URL}`, {
      headers: {
        Authorization: `Bearer ${getCached("token") || ""}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
    .then((response) => response);
}

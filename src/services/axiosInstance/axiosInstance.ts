import axios from "axios";

import { BASE_URL_POE, BASE_URL_POE2 } from "@/constants/endpoints";

/** Basic axios for the services endpoints. */
export const axiosInstance = axios.create({
  baseURL: BASE_URL_POE,
});

/** @TODO TEMP SOLUTION FOR THE PROXY SINCE WE ARE GOING TO MASK ALL THE ENDPOINTS */
export const axiosInstance2 = axios.create({
  baseURL: BASE_URL_POE2,
});

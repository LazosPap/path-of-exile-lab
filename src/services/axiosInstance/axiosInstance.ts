import axios from "axios";

import { BASE_URL_POE } from "@/constants/endpoints";

/** Basic axios for the services endpoints. */
export const axiosInstance = axios.create({
  baseURL: BASE_URL_POE,
});

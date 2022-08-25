/** @format */

import axios from "axios";
import { BASE_URL_APIS } from "./urls";

export const clients = axios.create({
    baseURL: BASE_URL_APIS,
});

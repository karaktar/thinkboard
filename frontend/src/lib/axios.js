import axios from "axios";

/**
 * @file This file configures a global Axios instance for making API requests.
 * It dynamically sets the `baseURL` based on the environment (development or production).
 */

/**
 * The base URL for the API.
 * In development, it points to the local backend server.
 * In production, it uses a relative path to make requests to the same origin.
 * @type {string}
 */
const BASE_URL =
  import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api";

/**
 * The configured Axios instance.
 * This instance can be used throughout the application to make API requests.
 * @type {axios.AxiosInstance}
 */
const api = axios.create({
  baseURL: BASE_URL,
});

export default api;

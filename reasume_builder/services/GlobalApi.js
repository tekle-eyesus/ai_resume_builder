// const { default: axios } = require("axios");

import axios from "axios";

const API_KEY = import.meta.env.VITE_STRAPI_API_KEY;
const axiosClient = axios.create({
  baseURL: "http://localhost:1337/api/", // end points
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
});

const createReasume = (data) => axiosClient.post("/user-resumes", data);

export default {
  createReasume,
};

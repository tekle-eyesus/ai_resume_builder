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
const getUserResume = (userEmail) =>
  axiosClient.get("/user-resumes?filters[userEmail][$eq]=" + userEmail);

const updateResume = (id, data) => axiosClient.put("/user-resumes/" + id, data);
export default {
  createReasume,
  getUserResume,
  updateResume,
};

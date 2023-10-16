// src/api/axios.js
import axios from "axios";

const SERVER_URL = "http://shinhan-stock-friends-lb-252672342.ap-northeast-2.elb.amazonaws.com";
console.log(SERVER_URL)

// Create axios instance
const instance = axios.create({
  baseURL: SERVER_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
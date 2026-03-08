import axios from "axios";

const API = axios.create({
 baseURL: "https://task-manager-mern-app-1-kofv.onrender.com"
});

export default API;
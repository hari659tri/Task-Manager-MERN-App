import axios from "axios";

const API = axios.create({
 baseURL: "https://task-manager-mern-app-1-3r27.onrender.com/api"
});

export default API;
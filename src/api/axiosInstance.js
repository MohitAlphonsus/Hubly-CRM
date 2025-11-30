import axios from "axios";

const API = axios.create({
	baseURL: "https://hubly-crm-server.onrender.com/api",
	headers: {
		"Content-Type": "application/json",
	},
});

API.interceptors.request.use((req) => {
	req.headers.Authorization = `Bearer ${localStorage.getItem("token") || ""}`;
	return req;
});

export default API;

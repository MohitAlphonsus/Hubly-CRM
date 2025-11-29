import API from "./axiosInstance";

export function fetchBotsSettings() {
	return API.get("/bot/settings");
}

export function updateBotSettings(data) {
	return API.post("/bot/settings", data);
}

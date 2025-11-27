import API from "./axiosInstance";

export function startChat(data) {
	return API.post("/user/chat", data);
}

export function sendUserMessage(data) {
	return API.post("/messages/user", data);
}

export function sendAdminMessage(data) {
	return API.post("/messages/admin", data);
}

export function getUserMessages(sessionToken) {
	return API.get("/messages/user", { params: { sessionToken } });
}

export function getMessagesByUserId(userId) {
	return API.get(`/messages/admin/${userId}`);
}

export function getAllUsers() {
	return API.get("/user/all");
}

export function getUserById(userId) {
	return API.get(`/user/${userId}`);
}

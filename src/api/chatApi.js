import API from "./axiosInstance";

export function startChat(data) {
  return API.post("user/chat", data);
}

export function userMessage(data) {
  return API.post("messages/user", data);
}

export function adminMessage(data) {
  return API.post("messages/admin", data);
}

export function getMessages() {
  return API.get("messages/all");
}
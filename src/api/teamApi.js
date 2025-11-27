import API from "./axiosInstance";

export function addTeamMember(data) {
	return API.post("/team/add", data);
}

export function deleteTeamMember(id) {
	return API.delete(`/team/delete/${id}`);
}

export function editAndUpdateTeamMember(id, data) {
	return API.put(`/team/update/${id}`, data);
}

export function getAllTeamMembers() {
	return API.get("/team/all");
}

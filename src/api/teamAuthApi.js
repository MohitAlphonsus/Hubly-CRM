import API from "./axiosInstance";

export function teamSignup(data) {
  return API.post("/team/signup", data);
}

export function teamLogin(data) {
  return API.post("/team/login", data);
}


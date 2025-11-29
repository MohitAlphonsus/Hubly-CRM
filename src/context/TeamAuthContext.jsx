import { createContext, useState, useEffect } from "react";
import { teamSignup, teamLogin } from "../api/teamAuthApi";

const TeamAuthContext = createContext();

function TeamAuthProvider({ children }) {
	const [currentTeamMember, setCurrentTeamMember] = useState(null);

	useEffect(() => {
		const teamMember = localStorage.getItem("team-member");
		if (teamMember) {
			setCurrentTeamMember(JSON.parse(teamMember));
		}
	}, []);

	const handleResponse = (response) => {
		const { teamMember, token } = response.data;
		localStorage.setItem("token", token);
		localStorage.setItem(
			"team-member",
			JSON.stringify({ email: teamMember.email, id: teamMember._id })
		);
		setCurrentTeamMember({ email: teamMember.email, id: teamMember._id });
	};
	const signup = async ({ firstName, lastName, email, password }) => {
		const response = await teamSignup({
			firstName,
			lastName,
			email,
			password,
		});
		handleResponse(response);
	};

	const login = async (data) => {
		const response = await teamLogin(data);
		handleResponse(response);
	};

	const logout = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("team-member");
		setCurrentTeamMember(null);
	};

	return (
		<TeamAuthContext.Provider
			value={{ currentTeamMember, signup, login, logout }}
		>
			{children}
		</TeamAuthContext.Provider>
	);
}

export { TeamAuthContext, TeamAuthProvider };

import { createContext, useState } from "react";
import {
	addTeamMember,
	deleteTeamMember,
	editAndUpdateTeamMember,
	getAllTeamMembers,
} from "../api/teamApi";

const TeamContext = createContext();

function TeamProvider({ children }) {
	const [team, setTeam] = useState([]);

	const handleFetchAllTeamMembers = async () => {
		const response = await getAllTeamMembers();
		setTeam(response.data.teamMembers);
	};
	return (
		<TeamContext.Provider value={{ team, handleFetchAllTeamMembers }}>
			{children}
		</TeamContext.Provider>
	);
}

export { TeamProvider, TeamContext };

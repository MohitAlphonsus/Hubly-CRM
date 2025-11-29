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

	const handleAddTeamMember = async (data) => {
		const response = await addTeamMember(data);
		setTeam((prevTeam) => [...prevTeam, response.data.teamMember]);
	};

	const handleDeleteTeamMember = async (id) => {
		await deleteTeamMember(id);
		setTeam((prevTeam) => prevTeam.filter((member) => member._id !== id));
	};

	return (
		<TeamContext.Provider
			value={{
				team,
				handleFetchAllTeamMembers,
				handleAddTeamMember,
				handleDeleteTeamMember,
			}}
		>
			{children}
		</TeamContext.Provider>
	);
}

export { TeamProvider, TeamContext };

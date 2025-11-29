import { createContext, useState } from "react";
import {
	addTeamMember,
	deleteTeamMember,
	editAndUpdateTeamMember,
	getAllTeamMembers,
	getTeamMember,
} from "../api/teamApi";

const TeamContext = createContext();

function TeamProvider({ children }) {
	const [team, setTeam] = useState([]);
	const [teamMember, setTeamMember] = useState({});

	const handleFetchAllTeamMembers = async () => {
		const response = await getAllTeamMembers();
		setTeam(response.data.teamMembers);
	};

	const handleFetchTeamMember = async (id) => {
		const response = await getTeamMember(id);
		setTeamMember(response.data.teamMember);
	};

	const handleAddTeamMember = async (data) => {
		const response = await addTeamMember(data);
		setTeam((prevTeam) => [...prevTeam, response.data.teamMember]);
	};

	const handleDeleteTeamMember = async (id) => {
		await deleteTeamMember(id);
		setTeam((prevTeam) => prevTeam.filter((member) => member._id !== id));
	};

	const handleEditTeamMember = async (id, data) => {
		await editAndUpdateTeamMember(id, data);
	};

	return (
		<TeamContext.Provider
			value={{
				team,
				teamMember,
				handleFetchAllTeamMembers,
				handleAddTeamMember,
				handleDeleteTeamMember,
				handleFetchTeamMember,
				handleEditTeamMember,
			}}
		>
			{children}
		</TeamContext.Provider>
	);
}

export { TeamProvider, TeamContext };

import { useState, useEffect } from "react";
import { useTeam } from "../../../hooks/useTeam";
import styles from "./Team.module.css";
import { generateInitials } from "../../../utils";
import editIcon from "../../../assets/icons/d-edit-icon.svg";
import deleteIcon from "../../../assets/icons/d-delete-icon.svg";
import circlePlusIcon from "../../../assets/icons/circle-plus.svg";
import { Button } from "../../ui";

const ASCENDING = "ASCENDING";
const DESCENDING = "DESCENDING";

export default function Team() {
	const [sortByNames, setSortByNames] = useState(ASCENDING);
	const { team, handleFetchAllTeamMembers } = useTeam();

	useEffect(() => {
		handleFetchAllTeamMembers();
	}, []);

	function handleSortByNames() {
		if (sortByNames === ASCENDING) {
			setSortByNames(DESCENDING);
		} else {
			setSortByNames(ASCENDING);
		}
	}

	const sortedEmployees = [...team].sort((a, b) => {
		const nameA = `${a.firstName} ${a.lastName}`.toLowerCase();
		const nameB = `${b.firstName} ${b.lastName}`.toLowerCase();

		if (nameA < nameB) return sortByNames === ASCENDING ? -1 : 1;
		if (nameA > nameB) return sortByNames === ASCENDING ? 1 : -1;
		return 0;
	});

	return (
		<div className={styles.team}>
			<table>
				<thead>
					<tr>
						<th></th>
						<th className={styles.sortAction} onClick={handleSortByNames}>
							Full Name
						</th>
						<th>Phone</th>
						<th>Email</th>
						<th>Role</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{sortedEmployees.map((teamMember) => (
						<tr key={teamMember._id}>
							<td>
								<div className={styles.avatar}>
									{generateInitials(
										`${teamMember.firstName} ${teamMember.lastName}`
									)}
								</div>
							</td>
							<td>{`${teamMember.firstName} ${teamMember.lastName}`}</td>
							<td>415-555-0132</td>
							<td>{teamMember.email}</td>
							<td>{teamMember.role}</td>
							<td>
								<button>
									<img src={editIcon} alt="edit-icon" />
								</button>
								<button>
									<img src={deleteIcon} alt="delete-icon" />
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<Button
				size="medium"
				className={styles.team__button}
				icon={<img src={circlePlusIcon} alt="circle-plus-icon" />}
				iconLeft
			>
				Add Team Member
			</Button>
		</div>
	);
}

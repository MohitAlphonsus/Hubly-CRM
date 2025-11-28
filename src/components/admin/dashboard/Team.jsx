import { useState, useEffect } from "react";
import { useTeam } from "../../../hooks/useTeam";
import styles from "./Team.module.css";
import { generateInitials } from "../../../utils";
import editIcon from "../../../assets/icons/d-edit-icon.svg";
import deleteIcon from "../../../assets/icons/d-delete-icon.svg";
import circlePlusIcon from "../../../assets/icons/circle-plus.svg";
import { Button } from "../../ui";
import Modal from "./d-ui/Modal";
import TeamForm from "./d-ui/TeamForm";

const ASCENDING = "ASCENDING";
const DESCENDING = "DESCENDING";

export default function Team() {
	const [sortByNames, setSortByNames] = useState(ASCENDING);
	const [isFormModalOpen, setIsFormModalOpen] = useState(false);
	const { team, handleFetchAllTeamMembers } = useTeam();

	function handleFormModal() {
		setIsFormModalOpen(!isFormModalOpen);
	}

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
				onClick={() => setIsFormModalOpen(true)}
			>
				Add Team Member
			</Button>
			{isFormModalOpen && (
				<Modal onClose={handleFormModal}>
					<div className={styles.form__modal}>
						<h2>Add Team Member</h2>
						<p>
							Talk with colleagues in a group chat. Messages in this group are
							only visible to it's participants. New teammates may only be
							invited by the administrators.
						</p>
						<TeamForm insideModal onClose={handleFormModal} />
					</div>
				</Modal>
			)}
		</div>
	);
}

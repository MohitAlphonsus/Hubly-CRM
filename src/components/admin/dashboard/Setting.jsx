import { useEffect } from "react";
import { Button } from "../../ui";
import { useTeamAuth } from "../../../hooks/useTeamAuth";
import { useTeam } from "../../../hooks/useTeam";
import TeamEditForm from "./d-ui/TeamEditForm";
import { useParams } from "react-router";

import styles from "./Setting.module.css";
export default function Setting() {
	const { logout } = useTeamAuth();
	const { teamMember, handleFetchTeamMember } = useTeam();

	const { id } = useParams();

	useEffect(() => {
		handleFetchTeamMember(id);
	}, []);

	return (
		<div className={styles.setting}>
			<Button
				size="small"
				variant="primary"
				className={styles["sign-out-btn"]}
				onClick={logout}
			>
				Log Out
			</Button>
			<div className={styles.edit__form__container}>
				<h4>Edit Profile</h4>
				<TeamEditForm teamMember={teamMember} />
			</div>
		</div>
	);
}

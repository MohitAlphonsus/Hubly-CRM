import { Button } from "../../ui";
import { useTeamAuth } from "../../../hooks/useTeamAuth";
import TeamForm from "./d-ui/TeamForm";

import styles from "./Setting.module.css";
export default function Setting() {
	const { logout } = useTeamAuth();
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
				<TeamForm />
			</div>
		</div>
	);
}

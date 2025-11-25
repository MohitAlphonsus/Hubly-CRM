import { Button } from "../../ui";
import styles from "./Setting.module.css";
import { useTeamAuth } from '../../../hooks/useTeamAuth'

export default function Setting() {
	const { logout } = useTeamAuth();
	return <div className={styles.setting}>
		<Button size="small" variant="primary" className={styles["sign-out-btn"]} onClick={logout}>Log Out</Button>
	</div>;
}

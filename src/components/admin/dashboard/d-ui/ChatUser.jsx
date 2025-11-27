import { generateInitials, capitalizeWords } from "../../../../utils";
import { useChat } from "../../../../hooks/useChat";

import styles from "./ChatUser.module.css";
export default function ChatUser({ user, userId, setUserId }) {
	const { handleFetchUserById } = useChat();

	function handleUserSelection() {
		setUserId(user._id);
		handleFetchUserById(user._id);
	}

	return (
		<div
			className={`${styles.chat__user} ${
				user._id === userId && styles.active__user
			}`}
			onClick={handleUserSelection}
		>
			<div className={styles.chat__user__profile}>
				{generateInitials(user.name)}
			</div>
			<p className={styles.chat__user__name}>{capitalizeWords(user.name)}</p>
			<p className={styles.chat__user__msg}>{user.latestMessage}</p>
		</div>
	);
}

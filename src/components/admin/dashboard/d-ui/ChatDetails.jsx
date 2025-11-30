import { generateInitials, capitalizeWords } from "../../../../utils";
import styles from "./ChatDetails.module.css";
import { useChat } from "../../../../hooks/useChat";
import userIcon from "../../../../assets/icons/d-user-icon.svg";
import phoneIcon from "../../../../assets/icons/d-phone-icon.svg";
import envelopeIcon from "../../../../assets/socials/envelope.svg";
import { useTeam } from "../../../../hooks/useTeam";
import { useEffect } from "react";
import CustomSelect from "./CustomSelect";

export default function ChatDetails() {
	const { selectedUser } = useChat();
	const { team, handleFetchAllTeamMembers } = useTeam();

	useEffect(() => {
		handleFetchAllTeamMembers();
	}, []);

	return (
		<div className={styles.chat__details}>
			{selectedUser ? (
				<div className={styles.user__details}>
					<div className={styles.profile}>
						<div className={styles.chat__user__profile}>
							{generateInitials(selectedUser?.name)}
						</div>
						<p className={styles.chat__user__name}>
							{capitalizeWords(selectedUser?.name)}
						</p>
					</div>
					<h4>Details</h4>
					<ul className={styles.user__info}>
						<li>
							<img src={userIcon} alt="user-icon" />
							<span>{selectedUser?.name}</span>
						</li>
						<li>
							<img src={phoneIcon} alt="phone-icon" />
							<span>{selectedUser?.mobile}</span>
						</li>
						<li>
							<img src={envelopeIcon} alt="email-icon" />
							<span>{selectedUser?.email}</span>
						</li>
					</ul>
				</div>
			) : (
				<div className={styles.user__details}>No user selected</div>
			)}
			<div className={styles.teams}>
				<h4>Teammates</h4>
				<CustomSelect options={team} />
				<select>
					<option value="unresolved">Unresolved</option>
					<option value="resolved">Resolved</option>
				</select>
			</div>
		</div>
	);
}

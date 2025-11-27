import { useState, useEffect } from "react";
import sendIcon from "../../../assets/icons/d-send-icon.svg";
import { useChat } from "../../../hooks/useChat";
import {
	generateInitials,
	capitalizeWords,
	formatChatDate,
} from "../../../utils";

import styles from "./ContactCenter.module.css";
export default function ContactCenter() {
	const [responseMessage, setResponseMessage] = useState("");
	const {
		users,
		userId,
		setUserId,
		adminMessages,
		handleAdminSendingMessage,
		handleFetchMessagesByUserId,
		handleFetchAllUsers,
	} = useChat();

	useEffect(() => {
		handleFetchAllUsers();
	}, []);

	useEffect(() => {
		if (userId) {
			handleFetchMessagesByUserId(userId);
		}
	}, [userId]);

	async function handleSubmit(e) {
		e.preventDefault();

		if (!responseMessage) return;
		await handleAdminSendingMessage(responseMessage);
		setResponseMessage("");
	}

	const sortedMessages = [...adminMessages].sort(
		(a, b) => new Date(a.createdAt) - new Date(b.createdAt)
	);

	let lastDate = null;

	return (
		<div className={styles.contact__center}>
			<div className={styles.chat__users}>
				<h4>Chats</h4>

				{/* users list */}
				<div className={styles.chat__users__list}>
					{users.map((user) => (
						<div
							className={`${styles.chat__user} ${
								user._id === userId && styles.active__user
							}`}
							key={user._id}
							onClick={() => setUserId(user._id)}
						>
							<div className={styles.chat__user__profile}>
								{generateInitials(user.name)}
							</div>
							<p className={styles.chat__user__name}>
								{capitalizeWords(user.name)}
							</p>
							<p className={styles.chat__user__msg}>{user.latestMessage}</p>
						</div>
					))}
				</div>
			</div>

			{/* chat interface */}

			<div className={styles.chat__box}>
				<header>
					<h6>{userId ? `Ticket#${userId}` : "Ticket"}</h6>
				</header>
				{userId ? (
					<>
						<div className={styles.chat}>
							{sortedMessages.map((msgs) => {
								const msgDate = new Date(msgs.createdAt).toDateString();
								const showDate = msgDate !== lastDate;
								lastDate = msgDate;

								return (
									<div key={msgs._id}>
										{showDate && (
											<p className={styles.chat__date}>
												{formatChatDate(msgs.createdAt)}
											</p>
										)}
										<p
											className={`${
												msgs.senderType === "user"
													? styles.chat__bubble__request
													: styles.chat__bubble__response
											}`}
										>
											{msgs.message}
										</p>
									</div>
								);
							})}
						</div>
						<div className={styles.chat__input}>
							<form onSubmit={handleSubmit}>
								<textarea
									placeholder="Type here"
									value={responseMessage}
									onChange={(e) => setResponseMessage(e.target.value)}
								/>
								<button type="submit">
									<img src={sendIcon} alt="send-icon" />
								</button>
							</form>
						</div>
					</>
				) : (
					<p>Please select a user</p>
				)}
			</div>

			{/* user details / team */}
			<div className={styles.chat__user__details}></div>
		</div>
	);
}

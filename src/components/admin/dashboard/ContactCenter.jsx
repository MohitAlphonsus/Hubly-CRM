import { useState, useEffect } from "react";
import sendIcon from "../../../assets/icons/d-send-icon.svg";
import { useChat } from "../../../hooks/useChat";
import { formatChatDate } from "../../../utils";

import styles from "./ContactCenter.module.css";
import ChatUser from "./d-ui/ChatUser";
import ChatDetails from "./d-ui/ChatDetails";
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
						<ChatUser
							user={user}
							key={user._id}
							userId={userId}
							setUserId={setUserId}
						/>
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
			<ChatDetails userId={userId} />
		</div>
	);
}

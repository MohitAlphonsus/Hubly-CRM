import { useState } from "react";
import sendIcon from "../../assets/icons/send-icon.svg";
import hublyInterfaceIcon from "../../assets/icons/hubly-interface-icon.svg";
import ChatInterfaceForm from "./ChatInterfaceForm";
import { useChat } from "../../hooks/useChat";

import styles from "./ChatInterface.module.css";
export default function ChatInterface({ readonly = false }) {
	const [message, setMessage] = useState("");
	const { sessionToken, conversations, handleUserSendingMessage } = useChat();

	async function handleSubmit(e) {
		e.preventDefault();
		if (!message) return;
		await handleUserSendingMessage(message);
		setMessage("");
	}

	return (
		<div
			className={`${styles.chatInterface} ${readonly ? styles.readonly : ""}`}
		>
			<header>
				<img src={hublyInterfaceIcon} alt="hubly-interface-icon" />
				<span>Hubly</span>
			</header>
			<main>
				<p className={`${styles.chat__bubble__response} ${styles.chat__image}`}>
					How can I help you?
				</p>

				{sessionToken ? (
					<p className={styles.chat__bubble__response}>Ask me anything!</p>
				) : (
					<ChatInterfaceForm />
				)}

				{sessionToken &&
					conversations.map((conversation) => (
						<p
							key={conversation._id}
							className={
								conversation.senderType === "user"
									? styles.chat__bubble__request
									: styles.chat__bubble__response
							}
						>
							{conversation.message}
						</p>
					))}
			</main>
			<footer>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						placeholder="Write a message"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					/>
					<button>
						<img src={sendIcon} alt="send-icon" />
					</button>
				</form>
			</footer>
		</div>
	);
}

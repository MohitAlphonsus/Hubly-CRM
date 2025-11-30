import { useState } from "react";
import sendIcon from "../../assets/icons/send-icon.svg";
import hublyInterfaceIcon from "../../assets/icons/hubly-interface-icon.svg";
import ChatInterfaceForm from "./ChatInterfaceForm";
import { useChat } from "../../hooks/useChat";
import { useBot } from "../../hooks/useBot";

import styles from "./ChatInterface.module.css";
export default function ChatInterface({ readonly = false }) {
	const [message, setMessage] = useState("");
	const { sessionToken, userMessages, handleUserSendingMessage } = useChat();
	const { intialBotsettings } = useBot();

	async function handleSubmit(e) {
		e.preventDefault();
		if (!message) return;
		await handleUserSendingMessage(message);
		setMessage("");
	}

	const sortedMessages = userMessages.sort(
		(a, b) => new Date(a.createdAt) - new Date(b.createdAt)
	);

	return (
		<div
			className={`${styles.chatInterface} ${readonly ? styles.readonly : ""}`}
		>
			<header style={{ backgroundColor: intialBotsettings?.headerColor }}>
				<img src={hublyInterfaceIcon} alt="hubly-interface-icon" />
				<span>Hubly</span>
			</header>
			<main style={{ backgroundColor: intialBotsettings?.backgroundColor }}>
				{intialBotsettings?.customMessages?.map((msg, index) => (
					<p
						key={index}
						className={`${styles.chat__bubble__response} ${styles.chat__image}`}
					>
						{msg}
					</p>
				))}

				{sessionToken ? null : (
					<ChatInterfaceForm
						introductionForm={intialBotsettings?.introductionForm}
					/>
				)}

				{sessionToken &&
					sortedMessages.map((msg) => (
						<p
							key={msg._id}
							className={
								msg.senderType === "user"
									? styles.chat__bubble__request
									: styles.chat__bubble__response
							}
						>
							{msg.message}
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

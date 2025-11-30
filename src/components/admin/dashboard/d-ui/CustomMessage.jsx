import { useState, useEffect } from "react";
import Card from "./Card";
import styles from "./CustomMessage.module.css";
import editIcon from "../.././../../assets/icons/d-edit-icon-2.svg";
import { useBot } from "../../../../hooks/useBot";

export default function CustomMessage({ title, field }) {
	const { intialBotsettings, handleUpdateBotSettings } = useBot();
	const [messages, setMessages] = useState(
		intialBotsettings[field] || ["How can I help you?", "Ask me anything!"]
	);

	function handleChangeMessages(index, newMsg) {
		const updatedMessages = [...messages];
		updatedMessages[index] = newMsg;
		setMessages(updatedMessages);
	}

	async function handleSave() {
		await handleUpdateBotSettings(field, messages);
	}

	return (
		<Card title={title}>
			{field === "welcomeMessage" ? (
				<div className={styles.custom__message__input}>
					<textarea
						value={messages[0]}
						onChange={(e) => handleChangeMessages(0, e.target.value)}
						className={styles.textarea}
					/>
					<button onClick={handleSave}>
						<img src={editIcon} alt="save" />
					</button>
				</div>
			) : (
				messages.map((msg, index) => (
					<div className={styles.custom__message__input} key={index}>
						<input
							type="text"
							value={msg}
							onChange={(e) => handleChangeMessages(index, e.target.value)}
						/>
						<button onClick={handleSave}>
							<img src={editIcon} alt="save" />
						</button>
					</div>
				))
			)}
		</Card>
	);
}

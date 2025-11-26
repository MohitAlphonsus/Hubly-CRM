import { useState } from "react";
import chatInterfaceIcon from "../../assets/icons/chat-icon.svg";
import closeIcon from "../../assets/icons/close-icon.svg";

import ChatInterface from "./ChatInterface";
import styles from "./ChatInterfaceContainer.module.css";
import ChatInterfaceMessage from "./ChatInterfaceMessage";

export default function ChatInterfaceContainer() {
	const [isInterfaceOpened, setIsInterfaceOpened] = useState(false);
	const [isInitialMessageOpened, setIsInitialMessageOpened] = useState(true);

	const handleInterfaceToggle = () => setIsInterfaceOpened(!isInterfaceOpened);
	return (
		<div className={styles.chatInterfaceContainer}>
			{isInterfaceOpened ? (
				<ChatInterface />
			) : (
				<>{isInitialMessageOpened && <ChatInterfaceMessage />}</>
			)}

			<button
				onClick={handleInterfaceToggle}
				className={styles.chatInterfaceBtn}
			>
				<img
					src={isInterfaceOpened ? closeIcon : chatInterfaceIcon}
					alt="chat-interface-icon"
				/>
			</button>
		</div>
	);
}

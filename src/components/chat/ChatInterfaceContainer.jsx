import { useState } from "react";
import chatInterfaceIcon from "../../assets/icons/chat-icon.svg";
import closeIcon from "../../assets/icons/close-icon.svg";
import hublyInterfaceIcon from "../../assets/icons/hubly-interface-icon.svg";
import ChatInterface from "./ChatInterface";
import styles from "./ChatInterfaceContainer.module.css";

export default function ChatInterfaceContainer() {
	const [isInterfaceOpened, setIsInterfaceOpened] = useState(false);
	const [isInitialMessageOpened, setIsInitialMessageOpened] = useState(true);

	const handleInterfaceToggle = () => setIsInterfaceOpened(!isInterfaceOpened);
	return (
		<div className={styles.chatInterfaceContainer}>
			{isInterfaceOpened ? (
				<ChatInterface icon={hublyInterfaceIcon} />
			) : (
				<>
					{isInitialMessageOpened && (
						<div className={styles.initialMessage}>
							<img
								src={hublyInterfaceIcon}
								alt="hubly-interface-icon"
								className={styles.initialMessage__icon}
							/>
							<p>
								👋 Want to chat about Hubly? I'm an chatbot here to help you
								find your way.
							</p>
							<button onClick={() => setIsInitialMessageOpened(false)}>
								&times;
							</button>
						</div>
					)}
				</>
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

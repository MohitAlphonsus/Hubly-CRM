import sendIcon from "../../assets/icons/send-icon.svg";
import hublyInterfaceIcon from "../../assets/icons/hubly-interface-icon.svg";
import ChatInterfaceForm from "./ChatInterfaceForm";

import styles from "./ChatInterface.module.css";
export default function ChatInterface({ readonly = false }) {
	return (
		<div className={`${styles.chatInterface} ${readonly && styles.readonly}`}>
			<header>
				<img src={hublyInterfaceIcon} alt="hubly-interface-icon" />
				<span>Hubly</span>
			</header>
			<main>
				<p className={`${styles.chat__bubble} ${styles.chat__image}`}>
					How can I help you?
				</p>
				<p className={styles.chat__bubble}>Ask me anything!</p>
				<ChatInterfaceForm />
			</main>
			<footer>
				<form>
					<input type="text" placeholder="Write a message" />
					<button>
						<img src={sendIcon} alt="send-icon" />
					</button>
				</form>
			</footer>
		</div>
	);
}

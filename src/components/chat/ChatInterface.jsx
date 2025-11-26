import sendIcon from "../../assets/icons/send-icon.svg";
import styles from "./ChatInterface.module.css";
import ChatInterfaceForm from "./ChatInterfaceForm";

export default function ChatInterface({ icon }) {
	return (
		<div className={styles.chatInterface}>
			<header>
				<img src={icon} alt="hubly-interface-icon" />
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

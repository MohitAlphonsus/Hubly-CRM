import sendIcon from "../../assets/icons/send-icon.svg";
import styles from "./ChatInterface.module.css";

export default function ChatInterface({ icon }) {
	return (
		<div className={styles.chatInterface}>
			<header>
				<img src={icon} alt="hubly-interface-icon" />
				<span>Hubly</span>
			</header>
			<main></main>
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

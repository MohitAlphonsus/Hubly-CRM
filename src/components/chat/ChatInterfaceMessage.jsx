import hublyInterfaceIcon from "../../assets/icons/hubly-interface-icon.svg";
import styles from "./ChatInterfaceMessage.module.css";
export default function ChatInterfaceMessage({
	text = "👋 Want to chat about Hubly? I'm an chatbot here to help you find your way.",
}) {
	return (
		<div className={styles.initial__message}>
			<img src={hublyInterfaceIcon} alt="hubly-interface-icon" />
			<p>{text}</p>
			<button onClick={() => setIsInitialMessageOpened(false)}>&times;</button>
		</div>
	);
}

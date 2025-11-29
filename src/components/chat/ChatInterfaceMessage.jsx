import hublyInterfaceIcon from "../../assets/icons/hubly-interface-icon.svg";
import styles from "./ChatInterfaceMessage.module.css";
import { useBot } from "../../hooks/useBot";
export default function ChatInterfaceMessage({}) {
	const { intialBotsettings } = useBot();
	return (
		<div className={styles.initial__message}>
			<img src={hublyInterfaceIcon} alt="hubly-interface-icon" />
			<p>{intialBotsettings.botSettings.welcomeMessage}</p>
			<button onClick={() => setIsInitialMessageOpened(false)}>&times;</button>
		</div>
	);
}

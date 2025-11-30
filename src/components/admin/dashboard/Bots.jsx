import { useRef } from "react";
import ChatInterface from "../../chat/ChatInterface";
import ChatInterfaceMessage from "../../chat/ChatInterfaceMessage";
import styles from "./Bots.module.css";
import Card from "./d-ui/Card";
import ChatForm from "./d-ui/ChatForm";
import ColorPicker from "./d-ui/ColorPicker";
import CustomMessage from "./d-ui/CustomMessage";
import { useBot } from "../../../hooks/useBot";
import TimePicker from "./d-ui/TimePicker";

export default function Bots() {
	const { intialBotsettings, loading, handleUpdateBotSettings } = useBot();
	const timerRef = useRef(null);

	if (loading || !intialBotsettings) return null;

	const handleTimeUpdate = (seconds) => {
		clearTimeout(timerRef.current);
		timerRef.current = setTimeout(() => {
			handleUpdateBotSettings("responseTimeLimit", seconds);
		}, 500);
	};

	return (
		<div className={styles.bots}>
			<div className={styles.bots__left}>
				<ChatInterface readonly />
				<ChatInterfaceMessage />
			</div>
			<div className={styles.bots__right}>
				<ColorPicker label="Header Color" field="headerColor" />
				<ColorPicker label="Custom Background Color" field="backgroundColor" />
				<CustomMessage title="Customize Message" field="customMessages" />
				<ChatForm title="Introduction Form" />
				<CustomMessage title="Welcome Message" field="welcomeMessage" />
				<Card title="Missed Chat Time">
					<TimePicker
						initialSeconds={intialBotsettings.responseTimeLimit}
						onChange={handleTimeUpdate}
					/>
				</Card>
			</div>
		</div>
	);
}

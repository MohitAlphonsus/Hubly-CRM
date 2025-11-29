import ChatInterface from "../../chat/ChatInterface";
import ChatInterfaceMessage from "../../chat/ChatInterfaceMessage";
import styles from "./Bots.module.css";
import Card from "./d-ui/Card";
import ChatForm from "./d-ui/ChatForm";
import ColorPicker from "./d-ui/ColorPicker";
import CustomMessage from "./d-ui/CustomMessage";
import TimePicker from "./d-ui/TimePicker";

export default function Bots() {
	return (
		<div className={styles.bots}>
			<div className={styles.bots__left}>
				<ChatInterface readonly />
				<ChatInterfaceMessage />
			</div>
			<div className={styles.bots__right}>
				<ColorPicker title="Header Color" />
				<ColorPicker title="Custom Background Color" />
				<CustomMessage
					text={["text to edit", "another text to edit"]}
					title="Customize Message"
				/>
				<ChatForm title="Introduction Form" />
				<CustomMessage text={["text to edit"]} title="Welcome Message" />
				<Card title="Missed Chat Time">
					<TimePicker onChange={() => {}} />
				</Card>
			</div>
		</div>
	);
}

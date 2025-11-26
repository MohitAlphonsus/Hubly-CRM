import ChatInterface from "../../chat/ChatInterface";
import ChatInterfaceMessage from "../../chat/ChatInterfaceMessage";
import styles from "./Bots.module.css";
import ColorPicker from "./d-ui/ColorPicker";

export default function Bots() {
	return (
		<div className={styles.bots}>
			<div className={styles.bots__left}>
				<ChatInterface readonly />
				<ChatInterfaceMessage />
			</div>
			<div className={styles.bots__right}>
				<ColorPicker title="Header Color" />
			</div>
		</div>
	);
}

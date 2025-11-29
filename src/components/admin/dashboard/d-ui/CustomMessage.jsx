import Card from "./Card";
import styles from "./CustomMessage.module.css";
import editIcon from "../.././../../assets/icons/d-edit-icon-2.svg";

export default function CustomMessage({ title, text }) {
	return (
		<Card title={title}>
			{text.map((text, index) => (
				<div className={styles.custom__message__input} key={index}>
					<input type="text" value={text} />
					<button>
						<img src={editIcon} alt="edit-icon" />
					</button>
				</div>
			))}
		</Card>
	);
}

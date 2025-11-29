import styles from "./ChatForm.module.css";
import Card from "./Card";
import { Button } from "../../../ui";

export default function ChatForm({ title }) {
	return (
		<Card title={title}>
			<form className={styles.chat__form}>
				<div className={styles.form__group}>
					<label>Your Name</label>
					<input type="text" name="name" placeholder="Your Name" />
				</div>
				<div className={styles.form__group}>
					<label>Your Phone</label>
					<input type="text" name="mobile" placeholder="+1 (000) 000-0000" />
				</div>
				<div className={styles.form__group}>
					<label>Your Email</label>
					<input type="text" name="email" placeholder="example@gmail.com" />
				</div>
				<Button size="medium" type="submit">
					Thank You
				</Button>
			</form>
		</Card>
	);
}

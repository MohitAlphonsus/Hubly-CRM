import styles from "./ContactCenter.module.css";
import sendIcon from "../../../assets/icons/d-send-icon.svg";

export default function ContactCenter() {
	return (
		<div className={styles.contact__center}>
			<div className={styles.chat__users}>
				<h4>Chats</h4>
				<div className={styles.chat__users__list}>
					<div className={styles.chat__user}>
						<div className={styles.chat__user__profile}>JD</div>
						<p className={styles.chat__user__name}>John Doe</p>
						<p className={styles.chat__user__msg}>Hello</p>
					</div>
				</div>
			</div>
			<div className={styles.chat__box}>
				<header>
					<h6>Ticket# 2025-00123</h6>
				</header>
				<div className={styles.chat}>chat</div>
				<div className={styles.chat__input}>
					<form>
						<textarea placeholder="Type here" />
						<button>
							<img src={sendIcon} alt="send-icon" />
						</button>
					</form>
				</div>
			</div>
			<div className={styles.chat__user__details}></div>
		</div>
	);
}

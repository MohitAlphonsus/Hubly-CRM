import styles from "./Button.module.css";
export default function Button({ children, onClick, icon, isLink = false }) {
	if (isLink) {
		return (
			<a href="#" className={`${styles.btn} ${styles["link--primary"]}`}>
				{children}
			</a>
		);
	}
	return (
		<button
			onClick={onClick}
			className={`${styles.btn} ${styles["btn--primary"]}`}
		>
			{children}
			{icon && icon}
		</button>
	);
}

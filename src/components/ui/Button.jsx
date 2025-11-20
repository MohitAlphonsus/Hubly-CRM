import styles from "./Button.module.css";
export default function Button({
	children,
	onClick,
	icon,
	size,
	isLink = false,
}) {
	if (isLink) {
		return (
			<a
				href="#"
				className={`${styles.btn} ${styles["link--primary"]} ${
					styles[`btn--${size}`]
				}`}
			>
				{children}
			</a>
		);
	}
	return (
		<button
			onClick={onClick}
			className={`${styles.btn} ${styles["btn--primary"]} ${
				styles[`btn--${size}`]
			}`}
		>
			{children}
			{icon && icon}
		</button>
	);
}

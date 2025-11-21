import styles from "./Button.module.css";
export default function Button({
	children,
	onClick,
	icon,
	size,
	variant = "primary",
	isLink = false,
	iconLeft = false,
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
			className={`${styles.btn} ${styles[`btn--${variant}`]} ${
				styles[`btn--${size}`]
			}`}
		>
			{iconLeft && icon && icon}
			{children}
			{!iconLeft && icon && icon}
		</button>
	);
}

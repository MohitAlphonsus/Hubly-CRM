import styles from "./Button.module.css";
export default function Button({
	children,
	onClick,
	icon,
	size,
	variant = "primary",
	iconLeft = false,
	className = undefined,
	type = "button",
}) {
	return (
		<button
			onClick={onClick}
			className={`${styles.btn} ${styles[`btn--${variant}`]} ${
				styles[`btn--${size}`]
			} ${className}`}
			type={type}
		>
			{iconLeft && icon && icon}
			{children}
			{!iconLeft && icon && icon}
		</button>
	);
}

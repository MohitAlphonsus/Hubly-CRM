import styles from "./Button.module.css";
export default function Button({
	children,
	onClick,
	icon,
	size,
	variant = "primary",
	iconLeft = false,
	className = undefined
}) {
	return (
		<button
			onClick={onClick}
			className={`${styles.btn} ${styles[`btn--${variant}`]} ${styles[`btn--${size}`]
				} ${className}`}
		>
			{iconLeft && icon && icon}
			{children}
			{!iconLeft && icon && icon}
		</button>
	);
}

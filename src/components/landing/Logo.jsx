import styles from "./Logo.module.css";
export default function Logo({ className }) {
	return (
		<div className={`${styles.logo} ${className}`}>
			<img src="/src/assets/logo.svg" alt="logo" />
		</div>
	);
}

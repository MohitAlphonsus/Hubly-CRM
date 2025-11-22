import styles from "./Logo.module.css";
import logo from "../../assets/icons/logo.svg";
export default function Logo({ className }) {
	return (
		<div className={`${styles.logo} ${className}`}>
			<img src={logo} alt="logo" />
		</div>
	);
}

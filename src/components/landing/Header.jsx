import { Button } from "../ui";
import styles from "./Header.module.css";

export default function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<img src="/src/assets/logo.svg" alt="logo" />
			</div>
			<div className={styles.actions}>
				<Button size="small" isLink={true}>
					Login
				</Button>
				<Button size="small">Sign Up</Button>
			</div>
		</header>
	);
}

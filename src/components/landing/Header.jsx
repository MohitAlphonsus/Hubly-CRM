import { Button } from "../ui";
import styles from "./Header.module.css";

export default function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<img src="/src/assets/logo.svg" alt="logo" />
			</div>
			<div className={styles.actions}>
				<Button isLink={true}>Login</Button>
				<Button>Sign Up</Button>
			</div>
		</header>
	);
}

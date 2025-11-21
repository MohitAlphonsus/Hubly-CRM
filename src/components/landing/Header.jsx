import Logo from "./Logo";
import { Button } from "../ui";
import styles from "./Header.module.css";

export default function Header() {
	return (
		<header className={styles.header}>
			<Logo />
			<div className={styles.actions}>
				<Button size="small" isLink={true}>
					Login
				</Button>
				<Button size="small">Sign Up</Button>
			</div>
		</header>
	);
}

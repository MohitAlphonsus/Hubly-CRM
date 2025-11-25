import Logo from "./Logo";
import { Button } from "../ui";
import styles from "./Header.module.css";
import { Link } from "react-router";

export default function Header() {
	return (
		<header className={styles.header}>
			<Logo />
			<div className={styles.actions}>
				<Link to="/login">
					<Button size="small" variant="tertiary">
						Login
					</Button>
				</Link>
				<Link to="/signup">
					<Button size="small">Sign Up</Button>
				</Link>
			</div>
		</header>
	);
}

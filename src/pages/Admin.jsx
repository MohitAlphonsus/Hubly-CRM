import { Sidebar, MainContent } from "../components/admin";
import styles from "./Page.module.css";
export default function Admin() {
	return (
		<div className={styles.app__layout}>
			<Sidebar />
			<MainContent />
		</div>
	);
}

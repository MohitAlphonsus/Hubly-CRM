import { Outlet, useLocation } from "react-router";
import styles from "./MainContent.module.css";

export default function MainContent() {
	const { pathname } = useLocation();
	const path = pathname.split("/")[2];
	let title;

	if (path === "dashboard") title = "Dashboard";
	if (path === "chats") title = "Contact Center";
	if (path === "analytics") title = "Analytics";
	if (path === "bots") title = "Chat Bots";
	if (path === "team") title = "Team";
	if (path === "setting") title = "Settings";

	return (
		<main
			className={styles.main__content}
			style={
				path === "chats" ? { background: "#FAFBFC" } : { background: "#FFFFFF" }
			}
		>
			<h3>{title}</h3>
			<Outlet />
		</main>
	);
}

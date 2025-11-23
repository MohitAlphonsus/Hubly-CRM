import { DASHBOARD_LINKS } from "../../constants";
import dashboardLogoIcon from "../../assets/icons/d-logo-icon.svg";
import styles from "./Sidebar.module.css";
import { NavLink } from "react-router";
import { useState } from "react";

export default function Sidebar() {
	const [activeLink, setActiveLink] = useState();
	return (
		<aside className={styles.sidebar}>
			<img src={dashboardLogoIcon} alt="hubly-icon-logo" />
			<nav>
				<ul>
					{DASHBOARD_LINKS.map(({ id, icon, title, route }, index) => (
						<li key={id}>
							<NavLink
								to={route}
								className={({ isActive }) => (isActive ? styles.active : "")}
								onClick={() => setActiveLink(index)}
							>
								<img src={icon} alt={title} />
								<span>{title}</span>
							</NavLink>
						</li>
					))}
				</ul>
			</nav>
		</aside>
	);
}

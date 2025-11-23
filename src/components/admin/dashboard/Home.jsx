import { useState } from "react";
import searchIcon from "../../../assets/icons/search-icon.svg";
import styles from "./Home.module.css";

const tabLink = [
	{ id: 1, title: "All Tickets" },
	{ id: 2, title: "Resolved" },
	{ id: 3, title: "Unresolved" },
];

export default function Home() {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<div className={styles.home}>
			<form>
				<img src={searchIcon} alt="search-icon" />
				<input type="text" placeholder="Search for ticket" />
			</form>
			<div className={styles.tickets}>
				<div className={styles.tabs}>
					{tabLink.map(({ id, title }, index) => (
						<button
							key={id}
							onClick={() => setActiveTab(index)}
							className={activeTab === index ? styles.active : ""}
						>
							{title}
						</button>
					))}
				</div>
				<div className={styles.tickets__list}>
					<div className={styles.ticket}>
						<div className={styles.ticket__info}>
							<p className={styles.ticket__title}>Ticket# 2023-00123</p>
							<p className={styles.ticket__recent__msg}>Hey!</p>
							<div className={styles.ticket__user}>
								<div className={styles.ticket__user__profile}>JD</div>
								<span className={styles.ticket__user__name}>John Doe</span>
								<span className={styles.ticket__user__number}>
									+91-0000000000
								</span>
								<span className={styles.ticket__user__email}>
									johndoe@email.com
								</span>
							</div>
							<span className={styles.ticket__date}>Posted at 12:45 AM</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

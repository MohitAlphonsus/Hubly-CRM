import { useEffect, useState } from "react";
import searchIcon from "../../../assets/icons/search-icon.svg";
import styles from "./Home.module.css";
import { useChat } from "../../../hooks/useChat";
import { generateInitials, formatPostedTime } from "../../../utils";

const tabLink = [
	{ id: 1, title: "All Tickets" },
	{ id: 2, title: "Resolved" },
	{ id: 3, title: "Unresolved" },
];

export default function Home() {
	const [activeTab, setActiveTab] = useState("all");
	const { users, handleFetchAllUsers } = useChat();

	useEffect(() => {
		handleFetchAllUsers();
	}, []);

	const filteredUsers = users?.filter((user) => {
		if (activeTab === "resolved") return user.status === "resolved";
		if (activeTab === "unresolved") return user.status !== "resolved";
		return true; // all tickets
	});

	return (
		<div className={styles.home}>
			<form>
				<img src={searchIcon} alt="search-icon" />
				<input type="text" placeholder="Search for ticket" />
			</form>

			<div className={styles.tickets}>
				<div className={styles.tabs}>
					{tabLink.map(({ id, title }) => {
						const key = title.toLowerCase().split(" ")[0]; // "all", "resolved", "unresolved"
						return (
							<button
								key={id}
								onClick={() => setActiveTab(key)}
								className={activeTab === key ? styles.active : ""}
							>
								{title}
							</button>
						);
					})}
				</div>

				<div className={styles.tickets__list}>
					{filteredUsers?.map((user) => (
						<div className={styles.ticket} key={user._id}>
							<div className={styles.ticket__info}>
								<p className={styles.ticket__title}>Ticket#{user._id}</p>
								<p className={styles.ticket__recent__msg}>
									{user.latestMessage}
								</p>

								<div className={styles.ticket__user}>
									<div className={styles.ticket__user__profile}>
										{generateInitials(user.name)}
									</div>
									<span className={styles.ticket__user__name}>{user.name}</span>
									<span className={styles.ticket__user__number}>
										{user.mobile}
									</span>
									<span className={styles.ticket__user__email}>
										{user.email}
									</span>
								</div>

								<span className={styles.ticket__date}>
									{formatPostedTime(user.updatedAt)}
								</span>

								<span
									className={
										user.status === "resolved"
											? styles.resolved
											: styles.unresolved
									}
								>
									{user.status}
								</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

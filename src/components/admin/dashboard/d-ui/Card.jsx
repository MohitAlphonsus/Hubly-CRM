import styles from "./Card.module.css";

export default function Card({ children, title }) {
	return (
		<div className={styles.card}>
			<h4>{title}</h4>
			{children}
		</div>
	);
}

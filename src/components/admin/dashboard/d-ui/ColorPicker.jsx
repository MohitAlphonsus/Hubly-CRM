import { useState } from "react";
const colors = ["#FFFFFF", "#000000", "#33475B"];
import styles from "./ColorPicker.module.css";

export default function ColorPicker({ title }) {
	const [color, setColor] = useState("#33475B");
	return (
		<div className={styles.color__picker}>
			<h4>{title}</h4>
			<div className={styles.colors}>
				{colors.map((color) => (
					<button style={{ background: `${color}` }} />
				))}
			</div>
		</div>
	);
}

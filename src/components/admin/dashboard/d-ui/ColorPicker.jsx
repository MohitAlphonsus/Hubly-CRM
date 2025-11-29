import { useState } from "react";
const colors = ["#FFFFFF", "#000000", "#33475B"];
import styles from "./ColorPicker.module.css";
import Card from "./Card";
export default function ColorPicker({ title }) {
	const [color, setColor] = useState("#33475B");
	return (
		<Card title={title}>
			<div className={styles.colors}>
				{colors.map((color) => (
					<button
						style={{ background: `${color}` }}
						key={color}
						className={styles.color__button}
					/>
				))}
			</div>
			<div className={styles.color__picker__input}>
				<label htmlFor="color-picker" />
				<input
					id="color-picker"
					type="color"
					value={color}
					onChange={(e) => setColor(e.target.value)}
				/>
				<input type="text" value={color} />
			</div>
		</Card>
	);
}

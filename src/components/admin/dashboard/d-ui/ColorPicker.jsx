import { useEffect, useState } from "react";

import styles from "./ColorPicker.module.css";
import Card from "./Card";
import { useBot } from "../../../../hooks/useBot";

const presetColors = ["#FFFFFF", "#000000", "#33475B"];

export default function ColorPicker({ label, field }) {
	const { intialBotsettings, handleUpdateBotSettings } = useBot();
	const [color, setColor] = useState(intialBotsettings[field] || "#33475B");

	useEffect(() => {
		handleUpdateBotSettings(field, color);
	}, [color]);

	return (
		<Card label={label}>
			<div className={styles.colors}>
				{presetColors.map((presetColor) => (
					<button
						style={{ background: presetColor }}
						key={presetColor}
						className={styles.color__button}
						onClick={() => setColor(presetColor)}
					/>
				))}
			</div>
			<div className={styles.color__picker__input}>
				<label
					htmlFor={`color-picker-${field}`}
					style={{ background: `${color}` }}
				/>
				<input
					id={`color-picker-${field}`}
					type="color"
					value={color}
					onChange={(e) => setColor(e.target.value)}
				/>
				<input type="text" value={color} readOnly />
			</div>
		</Card>
	);
}

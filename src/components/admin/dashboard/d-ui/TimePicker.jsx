import { useRef, useEffect, useState } from "react";
import styles from "./TimePicker.module.css";

export default function TimePicker({ initialSeconds = 0, onChange }) {
	const hours = [...Array(24).keys()];
	const minutes = [...Array(60).keys()];
	const seconds = [...Array(60).keys()];

	const [time, setTime] = useState({ h: 0, m: 0, s: 0 });

	const hourRef = useRef(null);
	const minuteRef = useRef(null);
	const secondRef = useRef(null);

	const ITEM_HEIGHT = 40;

	// Set wheels on load only
	useEffect(() => {
		const h = Math.floor(initialSeconds / 3600);
		const m = Math.floor((initialSeconds % 3600) / 60);
		const s = initialSeconds % 60;

		setTime({ h, m, s });

		if (hourRef.current) hourRef.current.scrollTop = h * ITEM_HEIGHT;
		if (minuteRef.current) minuteRef.current.scrollTop = m * ITEM_HEIGHT;
		if (secondRef.current) secondRef.current.scrollTop = s * ITEM_HEIGHT;
	}, [initialSeconds]);

	const handleUserScroll = (ref, key, max) => {
		if (!ref.current) return;

		const index = Math.round(ref.current.scrollTop / ITEM_HEIGHT);
		const value = Math.min(Math.max(index, 0), max);

		const updated = { ...time, [key]: value };
		setTime(updated);

		const secondsValue = updated.h * 3600 + updated.m * 60 + updated.s;

		onChange?.(secondsValue);
	};

	return (
		<div className={styles.container}>
			<div
				ref={hourRef}
				className={styles.wheel}
				onScroll={() => handleUserScroll(hourRef, "h", 23)}
			>
				{hours.map((h) => (
					<div key={h} className={styles.item}>
						{String(h).padStart(2, "0")}
					</div>
				))}
			</div>

			<div
				ref={minuteRef}
				className={styles.wheel}
				onScroll={() => handleUserScroll(minuteRef, "m", 59)}
			>
				{minutes.map((m) => (
					<div key={m} className={styles.item}>
						{String(m).padStart(2, "0")}
					</div>
				))}
			</div>

			<div
				ref={secondRef}
				className={styles.wheel}
				onScroll={() => handleUserScroll(secondRef, "s", 59)}
			>
				{seconds.map((s) => (
					<div key={s} className={styles.item}>
						{String(s).padStart(2, "0")}
					</div>
				))}
			</div>

			<div className={styles.centerLine} />
		</div>
	);
}

import { useRef, useEffect, useState } from "react";
import styles from "./TimePicker.module.css";
export default function TimePicker({ onChange }) {
	const hours = [...Array(24).keys()];
	const minutes = [...Array(60).keys()];
	const seconds = [...Array(60).keys()];

	const [time, setTime] = useState({
		h: 0,
		m: 0,
		s: 0,
	});

	const hourRef = useRef(null);
	const minuteRef = useRef(null);
	const secondRef = useRef(null);

	const handleScroll = (ref, key, max) => {
		if (!ref.current) return;

		const itemHeight = 40; // must match CSS
		const scrollTop = ref.current.scrollTop;

		const index = Math.round(scrollTop / itemHeight);
		const value = Math.min(index, max);

		setTime((prev) => ({
			...prev,
			[key]: value,
		}));
	};

	useEffect(() => {
		onChange && onChange(time);
	}, [time]);

	return (
		<div className={styles.container}>
			<div
				ref={hourRef}
				className={styles.wheel}
				onScroll={() => handleScroll(hourRef, "h", 23)}
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
				onScroll={() => handleScroll(minuteRef, "m", 59)}
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
				onScroll={() => handleScroll(secondRef, "s", 59)}
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

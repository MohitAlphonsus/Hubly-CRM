import { useState } from "react";
import styles from "./CustomSelect.module.css";

const CustomSelect = ({ options = [] }) => {
	const [open, setOpen] = useState(false);
	const [selected, setSelected] = useState(null);

	const handleSelect = (id) => {
		setSelected(id);
		setOpen(false);
	};

	// Determine display text
	const selectedOption = options.find((o) => o._id === selected) || options[0];
	const displayName = selectedOption
		? `${selectedOption.firstName} ${selectedOption.lastName}`
		: "Select";

	return (
		<div className={styles.select__wrapper}>
			<button
				type="button"
				className={styles.select__trigger}
				onClick={() => setOpen(!open)}
			>
				{displayName}
			</button>

			{open && (
				<div className={styles.select__dropdown}>
					{options.map((opt) => (
						<button
							key={opt._id}
							type="button"
							className={styles.select__option}
							onClick={() => handleSelect(opt._id)} // ← FIXED
						>
							{`${opt.firstName} ${opt.lastName}`}
						</button>
					))}
				</div>
			)}
		</div>
	);
};

export default CustomSelect;

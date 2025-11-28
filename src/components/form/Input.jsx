import FormGroup from "./FormGroup";

export default function Input({
	type,
	label,
	name,
	placeholder = "",
	onChange,
	value,
	checked = false,
	className = undefined,
}) {
	return (
		<FormGroup label={label}>
			{type === "checkbox" ? (
				<input
					type={type}
					id={label}
					name={name}
					placeholder={placeholder}
					onChange={onChange}
					value={value}
					checked={checked}
				/>
			) : (
				<input
					type={type}
					id={label}
					name={name}
					onChange={onChange}
					value={value}
					className={className}
				/>
			)}
		</FormGroup>
	);
}

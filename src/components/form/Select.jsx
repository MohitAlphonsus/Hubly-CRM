import FormGroup from "./FormGroup";

export default function Select({
	label,
	name,
	value,
	onChange,
	options = [],
	placeholder = "Select...",
}) {
	return (
		<FormGroup label={label}>
			<select id={label} name={name} value={value} onChange={onChange}>
				{placeholder && (
					<option value="" disabled>
						{placeholder}
					</option>
				)}

				{options.map((opt) => (
					<option key={opt} value={opt}>
						{opt}
					</option>
				))}
			</select>
		</FormGroup>
	);
}

import FormGroup from "./FormGroup";

export default function Input({ type, label, name, placeholder = "" }) {
	return (
		<FormGroup label={label}>
			<input type={type} id={label} name={name} placeholder={placeholder} />
		</FormGroup>
	);
}

import styles from "./Form.module.css";
export default function FormGroup({ label, children }) {
	return (
		<div className={styles.form__group}>
			<label htmlFor={label}>{label}</label>
			{children}
		</div>
	);
}

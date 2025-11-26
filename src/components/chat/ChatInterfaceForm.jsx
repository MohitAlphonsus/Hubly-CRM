import { useState } from "react";
import { Button } from "../ui";
import styles from "./ChatInterfaceForm.module.css";

export default function ChatInterfaceForm({ className }) {
	const [formData, setFormData] = useState({
		name: "",
		phone: "",
		email: "",
	});

	function handleChange(e) {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	}

	function handleSubmit(e) {
		e.preventDefault();
		console.log(formData);

		setFormData({
			name: "",
			phone: "",
			email: "",
		});
	}
	return (
		<form className={`${styles.form} ${className}`} onSubmit={handleSubmit}>
			<h4>Introduce Yourself</h4>
			<div className={styles.form__group}>
				<label>Your Name</label>
				<input
					type="text"
					placeholder="Your Name"
					value={formData.name}
					onChange={handleChange}
				/>
			</div>
			<div className={styles.form__group}>
				<label>Your Phone</label>
				<input
					type="text"
					placeholder="+1 (000) 000-0000"
					value={formData.phone}
					onChange={handleChange}
				/>
			</div>
			<div className={styles.form__group}>
				<label>Your Email</label>
				<input
					type="text"
					placeholder="example@gmail.com"
					value={formData.email}
					onChange={handleChange}
				/>
			</div>
			<Button size="medium">Thank You</Button>
		</form>
	);
}

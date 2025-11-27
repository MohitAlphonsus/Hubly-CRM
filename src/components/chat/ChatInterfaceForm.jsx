import { useState } from "react";
import { Button } from "../ui";
import styles from "./ChatInterfaceForm.module.css";
import { useChat } from "../../hooks/useChat";

export default function ChatInterfaceForm({ className }) {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		mobile: "",
	});

	const { handleStartChat } = useChat();

	function handleChange(e) {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	}

	async function handleSubmit(e) {
		e.preventDefault();
		try {
			if (!formData.name || !formData.mobile || !formData.email) {
				alert("All fields are required");
				return;
			}
			await handleStartChat(formData);

			setFormData({
				name: "",
				email: "",
				mobile: "",
			});
		} catch (error) {
			alert(error.message);
		}
	}
	return (
		<form className={`${styles.form} ${className}`} onSubmit={handleSubmit}>
			<h4>Introduce Yourself</h4>
			<div className={styles.form__group}>
				<label>Your Name</label>
				<input
					type="text"
					name="name"
					placeholder="Your Name"
					value={formData.name}
					onChange={handleChange}
				/>
			</div>
			<div className={styles.form__group}>
				<label>Your Phone</label>
				<input
					type="text"
					name="mobile"
					placeholder="+1 (000) 000-0000"
					value={formData.mobile}
					onChange={handleChange}
				/>
			</div>
			<div className={styles.form__group}>
				<label>Your Email</label>
				<input
					type="text"
					name="email"
					placeholder="example@gmail.com"
					value={formData.email}
					onChange={handleChange}
				/>
			</div>
			<Button size="medium" type="submit">
				Thank You
			</Button>
		</form>
	);
}

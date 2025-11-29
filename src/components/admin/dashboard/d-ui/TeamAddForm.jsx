import { useState } from "react";
import { Input, Select } from "../../../form";
import { Button } from "../../../ui";
import styles from "./TeamAddForm.module.css";
import { useTeam } from "../../../../hooks/useTeam";
export default function TeamAddForm({ onClose }) {
	const [formData, setFormData] = useState({
		username: "",
		email: "",
		designation: "",
	});

	const { handleAddTeamMember } = useTeam();

	function handleChange(e) {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	}

	async function handleSubmit(e) {
		e.preventDefault();
		console.log(formData);

		await handleAddTeamMember(formData);

		setFormData({
			username: "",
			email: "",
			designation: "",
		});
	}
	return (
		<div className={styles.team__add__form}>
			<form onSubmit={handleSubmit}>
				<Input
					type="text"
					label="User Name"
					name="username"
					placeholder="User name"
					value={formData.username}
					onChange={handleChange}
				/>
				<Input
					type="email"
					label="Email ID"
					name="email"
					placeholder="Email ID"
					value={formData.email}
					onChange={handleChange}
				/>
				<Select
					label="Designation"
					name="designation"
					options={["team-member", "admin"]}
					placeholder="Designation"
					value={formData.designation}
					onChange={handleChange}
				/>
				<div className={styles.form__actions}>
					<Button onClick={onClose} variant="secondary">
						Cancel
					</Button>
					<Button size="medium" type="submit">
						Save
					</Button>
				</div>
			</form>
		</div>
	);
}

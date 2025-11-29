import { useState, useEffect } from "react";
import { Input } from "../../../form";
import styles from "./TeamEditForm.module.css";
import { Button } from "../../../ui";
import { useTeam } from "../../../../hooks/useTeam";

export default function TeamEditForm({ teamMember }) {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	const { handleEditTeamMember } = useTeam();

	useEffect(() => {
		setFormData({
			firstName: teamMember.firstName || "",
			lastName: teamMember.lastName || "",
			email: teamMember.email || "",
			password: "",
			confirmPassword: "",
		});
	}, []);

	function handleChange(e) {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	}

	async function handleSubmit(e) {
		e.preventDefault();

		try {
			if (formData.password !== formData.confirmPassword) {
				throw new Error("Passwords do not match");
			}

			await handleEditTeamMember(teamMember._id, {
				firstName: formData.firstName,
				lastName: formData.lastName,
				email: formData.email,
				password: formData.password,
			});

			setFormData({
				firstName: "",
				lastName: "",
				email: "",
				password: "",
				confirmPassword: "",
			});

			return alert("data updated successfully");
		} catch (err) {
			return alert(err.message);
		}
	}

	return (
		<div className={styles.team__form}>
			<form onSubmit={handleSubmit}>
				<Input
					type="text"
					label="First Name"
					name="firstName"
					placeholder="First Name"
					value={formData.firstName}
					onChange={handleChange}
				/>
				<Input
					type="text"
					label="Last Name"
					name="lastName"
					placeholder="Last Name"
					value={formData.lastName}
					onChange={handleChange}
				/>
				<Input
					type="email"
					label="Email"
					name="email"
					placeholder="Email"
					value={formData.email}
					onChange={handleChange}
				/>
				<Input
					type="password"
					label="Password"
					name="password"
					placeholder="********"
					value={formData.password}
					onChange={handleChange}
				/>
				<Input
					type="password"
					label="Confirm Password"
					name="confirmPassword"
					placeholder="********"
					value={formData.confirmPassword}
					onChange={handleChange}
				/>

				<Button type="submit" size="medium">
					Save
				</Button>
			</form>
		</div>
	);
}

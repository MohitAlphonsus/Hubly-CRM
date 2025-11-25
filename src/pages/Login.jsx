import { useState } from "react";
import { useNavigate } from "react-router";
import { useTeamAuth } from "../hooks/useTeamAuth";

import { RegistrationContainer } from "../components/ui";
import { Input } from "../components/form";

import styles from "./Page.module.css";


export default function Login() {
	const [formData, setFormData] = useState({
		username: "",
		password: "",
	})
	const { login } = useTeamAuth();
	const navigate = useNavigate();

	function handleChange(e) {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		})
	}

	async function handleSubmit(e) {
		e.preventDefault();

		if (!formData.username || !formData.password) {
			alert("All fields are required");
			return;
		}

		try {
			await login({
				email: formData.username,
				password: formData.password,
			});
			alert("Login successful");
			navigate("/admin");
		} catch (err) {
			alert(err.message);
		}

		setFormData({
			username: "",
			password: "",
		})
	}

	return (
		<RegistrationContainer title="Sign in to your Plexify">
			<form className={styles.form} onSubmit={handleSubmit}>
				<Input type="email" label="Username" name="username" value={formData.username} onChange={handleChange} />
				<Input type="password" label="Password" name="password" value={formData.password} onChange={handleChange} />
				<button type="submit">Log In</button>
			</form>
		</RegistrationContainer>
	);
}

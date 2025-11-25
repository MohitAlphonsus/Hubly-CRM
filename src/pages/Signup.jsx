import { useState } from "react";
import { useNavigate } from "react-router";
import { Input } from "../components/form";
import { RegistrationContainer } from "../components/ui";
import { useTeamAuth } from "../hooks/useTeamAuth";
import styles from "./Page.module.css";


export default function Signup() {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	const [checkbox, setCheckbox] = useState(false);
	const { signup } = useTeamAuth();
	const navigate = useNavigate();

	async function handleSubmit(e) {
		e.preventDefault();
		if (!formData.firstName || !formData.lastName || !formData.email || !formData.password) {
			alert("All fields are required")
			return
		}

		if (formData.password !== formData.confirmPassword) {
			alert("Passwords do not match")
			return
		}

		if (!checkbox) {
			alert("You must agree to the terms and conditions")
			return
		}

		try {
			await signup({
				firstName: formData.firstName,
				lastName: formData.lastName,
				email: formData.email,
				password: formData.password,
			});
			alert("Signup successful");
			navigate("/admin");
		} catch (err) {
			alert(err.message);
		}

		setFormData({
			firstName: "",
			lastName: "",
			email: "",
			password: "",
			confirmPassword: "",
		})
		setCheckbox(false)
	}

	function handleChange(e) {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		})
	}


	return (
		<RegistrationContainer title="Create an account" action="login" >
			<form className={styles.form} onSubmit={handleSubmit}>
				<Input type="text" label="First Name" name="firstName" onChange={handleChange} value={formData.firstName} />
				<Input type="text" label="Last Name" name="lastName" onChange={handleChange} value={formData.lastName} />
				<Input type="email" label="Email" name="email" onChange={handleChange} value={formData.email} />
				<Input type="password" label="Password" name="password" onChange={handleChange} value={formData.password} />
				<Input
					type="password"
					label="Confirm Password"
					name="confirmPassword" onChange={handleChange}
					value={formData.confirmPassword}

				/>
				<Input
					onChange={(e) => setCheckbox(e.target.checked)}
					checked={checkbox}
					type="checkbox"
					label="By creating an account, I agree to our Terms of use and Privacy Policy"

				/>
				<button type="submit">Create an account</button>
			</form>
		</RegistrationContainer>
	);
}

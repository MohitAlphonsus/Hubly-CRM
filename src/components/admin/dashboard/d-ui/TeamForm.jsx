import { useState } from "react";
import { Input } from "../../../form";
import styles from "./TeamForm.module.css";
import { Button } from "../../../ui";

export default function TeamForm() {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	return (
		<div className={styles.team__form}>
			<form>
				<Input
					type="text"
					label="First Name"
					name="firstName"
					placeholder="First Name"
				/>
				<Input
					type="text"
					label="Last Name"
					name="lastName"
					placeholder="Last Name"
				/>
				<Input type="email" label="Email" name="email" placeholder="Email" />
				<Input
					type="password"
					label="Password"
					name="password"
					placeholder="Password"
				/>
				<Input
					type="password"
					label="Confirm Password"
					name="confirmPassword"
					placeholder="Password"
				/>
				<Button type="submit" size="medium">
					Save
				</Button>
			</form>
		</div>
	);
}

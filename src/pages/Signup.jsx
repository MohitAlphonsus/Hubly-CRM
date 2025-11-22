import { Input } from "../components/form";
import { RegistrationContainer } from "../components/ui";
import styles from "./Page.module.css";
export default function Signup() {
	return (
		<RegistrationContainer title="Create an account" action="login">
			<form className={styles.form}>
				<Input type="text" label="First Name" name="firstName" />
				<Input type="text" label="Last Name" name="lastName" />
				<Input type="email" label="Email" name="email" />
				<Input type="password" label="Password" name="password" />
				<Input
					type="password"
					label="Confirm Password"
					name="confirmPassword"
				/>
				<Input
					type="checkbox"
					label="By creating an account, I agree to our Terms of use 
and Privacy Policy"
				/>
				<button type="submit">Create an account</button>
			</form>
		</RegistrationContainer>
	);
}

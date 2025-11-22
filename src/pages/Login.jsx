import { RegistrationContainer } from "../components/ui";
import { Input } from "../components/form";
import styles from "./Page.module.css";
export default function Login() {
	return (
		<RegistrationContainer title="Sign in to your Plexify" action="login">
			<form className={styles.form}>
				<Input type="text" label="Username" name="username" />
				<Input type="password" label="Password" name="password" />
				<button type="submit">Log In</button>
			</form>
		</RegistrationContainer>
	);
}

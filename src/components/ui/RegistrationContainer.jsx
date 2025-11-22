import { Link } from "react-router";
import regImage from "../../assets/reg-page.jpg";
import logo from "../../assets/logo.svg";
import styles from "./RegistrationContainer.module.css";

export default function RegistrationContainer({
	title,
	children,
	action = "signup",
}) {
	return (
		<section className={styles.reg__container}>
			<div className={styles.reg__form}>
				<Link to="/">
					<img src={logo} alt="logo" />
				</Link>
				<div className={styles.reg__form__container}>
					<h4 className="heading-quaternary">{title}</h4>
					{children}
					<p className={`${action === "login" && styles.link__text}`}>
						{action === "login" ? "" : "Don't have an account?"}
						<Link
							to={`/${action}`}
							className={`${action === "login" && styles.link}`}
						>
							{action === "login" ? "Sign In Instead" : "Sign Up"}
						</Link>
					</p>
				</div>
				<p>
					This site is protected by reCAPTCHA and the Google Privacy Policy and
					Terms of Service apply.
				</p>
			</div>
			<div
				className={styles.reg__image}
				style={{ backgroundImage: `url(${regImage})` }}
				role="image"
			>
				&nbsp;
			</div>
		</section>
	);
}

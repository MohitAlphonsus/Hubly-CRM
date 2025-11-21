import Logo from "./Logo";
import { FOOTER_LINKS, SOCIAL_ICONS } from "../../constants";
import styles from "./Footer.module.css";

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className="container">
				<div className={styles.footer__layout}>
					<Logo className={styles.footer__logo} />
					{FOOTER_LINKS.map((link) => (
						<div key={link.id}>
							<h5>{link.title}</h5>
							<ul>
								{link.links.map((item, index) => (
									<li key={index}>
										<a href="#">{item}</a>
									</li>
								))}
							</ul>
						</div>
					))}
					<div className={styles.footer__socials}>
						{SOCIAL_ICONS.map((icon) => (
							<img key={icon.id} src={icon.icon} alt="social-icon" />
						))}
					</div>
				</div>
			</div>
		</footer>
	);
}

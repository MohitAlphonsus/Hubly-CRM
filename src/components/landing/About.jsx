import { aboutTexts } from "../../constants";
import aboutImg from "../../assets/about.png";
import aboutSocialImg from "../../assets/about-social-brands.png";
import styles from "./About.module.css";

export default function About() {
	return (
		<section className="section">
			<div className="container">
				<div className={styles.about}>
					<div className="section-heading">
						<h2 className="heading-secondary">
							At its core, Hubly is a robust CRM solution.
						</h2>
						<p className="text-primary">
							Hubly helps businesses streamline customer interactions, track
							leads, and automate tasks—saving you time and maximizing revenue.
							Whether you’re a startup or an enterprise, Hubly adapts to your
							needs, giving you the tools to scale efficiently.
						</p>
					</div>
					<div className={styles.about__content}>
						<div className={styles.content}>
							{aboutTexts.map((about) => (
								<div className={styles.content__item} key={about.id}>
									<h4
										className={`${
											about.id === 1
												? "heading-quaternary"
												: styles.content__title
										}`}
									>
										{about.title}
									</h4>
									<p className="text-light">{about.desc}</p>
								</div>
							))}
						</div>
						<div className={styles.image}>
							<img src={aboutImg} alt="about" />
							<div className={styles.image__socials}>
								<img src={aboutSocialImg} alt="socials" />
							</div>
							<div className={styles.image__circle}></div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

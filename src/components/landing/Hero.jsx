import { Button } from "../ui";
import styles from "./Hero.module.css";

export default function Hero() {
	return (
		<section className="section">
			<div className="container">
				<div className={styles.hero}>
					<div className={styles.hero__content}>
						<h1>Grow Your Business Faster with Hubly CRM</h1>
						<p>
							Manage leads, automate workflows, and close deals effortlessly—all
							in one powerful platform.
						</p>
						<div className={styles.hero__actions}>
							<Button>Get Started</Button>
						</div>
					</div>
					<div className={styles.hero__image}>
						<div className={styles.hero__image__rect}>
							<img src="/src/assets/hero.png" alt="hero" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

import { Button } from "../ui";
import styles from "./Hero.module.css";
import arrowRight from "../../assets/icons/arrow-right.svg";
import playBtn from "../../assets/icons/play-button.svg";
import heroImg from "../../assets/hero.png";
export default function Hero() {
	return (
		<section className={`section ${styles.hero__section}`}>
			<div className="container">
				<div className={styles.hero}>
					<div className={styles.hero__content}>
						<h1 className="heading-primary">
							Grow Your Business Faster with Hubly CRM
						</h1>
						<p className="text-primary">
							Manage leads, automate workflows, and close deals effortlessly—all
							in one powerful platform.
						</p>
						<div className={styles.hero__actions}>
							<Button size="medium" icon={<img src={arrowRight} alt="arrow" />}>
								Get Started
							</Button>
							<Button
								size="medium"
								variant="secondary"
								icon={<img src={playBtn} alt="play" />}
								iconLeft
							>
								Watch Video
							</Button>
						</div>
					</div>
					<div className={styles.hero__image}>
						<div className={styles.hero__image__rect}>
							<img src={heroImg} alt="hero" />
						</div>
						<div className={styles.hero__image__card}>&nbsp;</div>
						<div className={styles.hero__image__calender}>&nbsp;</div>
						<div className={styles.hero__image__graph}>&nbsp;</div>
					</div>
				</div>
			</div>
		</section>
	);
}

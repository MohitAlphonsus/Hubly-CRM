import styles from "./Card.module.css";
import checkIcon from "../../assets/Check icon.svg";

export default function Card({ pricingPlan }) {
	const { plan, desc, price, included, action } = pricingPlan;

	return (
		<div className={styles.card}>
			<h3 className="heading-tertiary">{plan}</h3>
			<p>{desc}</p>
			<h5 className={styles.price}>
				${price}
				<span>/month</span>
			</h5>
			<div className={styles.features__included}>
				<h6>What's included</h6>
				<ul className={styles.features}>
					{included.map((features, i) => (
						<li key={i}>
							<img src={checkIcon} alt="check" />
							{features}
						</li>
					))}
				</ul>
			</div>
			<button className={styles.card__btn}>{action}</button>
		</div>
	);
}

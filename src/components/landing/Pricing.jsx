import { PRICING_PLANS } from "../../constants";
import styles from "./Pricing.module.css";
import Card from "./Card";

export default function Pricing() {
	return (
		<section className="section">
			<div className="container">
				<div className={styles.pricing}>
					<div className="section-heading">
						<h2 className="heading-secondary">We have plans for everyone!</h2>
						<p className="text-primary">
							We started with a strong foundation, then simply built all of the
							sales and marketing tools ALL businesses need under one platform.
						</p>
					</div>
					<div className={styles.pricing__cards}>
						{PRICING_PLANS.map((pricingPlan) => (
							<Card key={pricingPlan.id} pricingPlan={pricingPlan} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

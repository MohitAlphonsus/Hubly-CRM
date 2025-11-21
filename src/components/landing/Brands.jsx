import styles from "./Brands.module.css";
import { BRANDS } from "../../constants";

export default function Brands() {
	return (
		<div className={styles.brands}>
			{BRANDS.map((brand) => (
				<img key={brand.name} src={brand.logo} alt={brand.name} />
			))}
		</div>
	);
}

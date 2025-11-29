import { createPortal } from "react-dom";
import styles from "./Modal.module.css";

export default function Modal({ children, onClose }) {
	return createPortal(
		<div className={styles.overlay} onClick={onClose}>
			<div className={styles.modal} onClick={(e) => e.stopPropagation()}>
				{children}
			</div>
		</div>,
		document.getElementById("modal")
	);
}

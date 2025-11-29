import { useContext } from "react";
import { BotContext } from "../context/BotContext";

export function useBot() {
	const context = useContext(BotContext);
	if (!context) {
		throw new Error("useBot must be used within a BotProvider");
	}
	return context;
}

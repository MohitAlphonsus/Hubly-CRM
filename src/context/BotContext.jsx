import { createContext, useState, useEffect } from "react";
import { fetchBotsSettings, updateBotSettings } from "../api/botApi";

const BotContext = createContext();

function BotProvider({ children }) {
	const [intialBotsettings, setInitialBotsettings] = useState({});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function load() {
			try {
				const res = await fetchBotsSettings();
				setInitialBotsettings(res.data.botSettings); // MUST MATCH BACKEND
			} catch (err) {
				console.error("Failed to load bot settings", err);
			}
			setLoading(false); // IMPORTANT
		}
		load();
	}, []);

	const handleUpdateBotSettings = async (key, value) => {
		const partialUpdate = { [key]: value };

		setInitialBotsettings((prev) => ({
			...prev,
			...partialUpdate,
		}));

		try {
			await updateBotSettings(partialUpdate);
		} catch (err) {
			console.log(`Error in Update Bot Settings ${err}`);
			return res
				.status(500)
				.json({ message: "Internal server error", success: false });
		}
	};

	return (
		<BotContext.Provider
			value={{ loading, intialBotsettings, handleUpdateBotSettings }}
		>
			{children}
		</BotContext.Provider>
	);
}

export { BotContext, BotProvider };

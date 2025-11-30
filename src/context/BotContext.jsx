import { createContext, useState, useEffect } from "react";
import { fetchBotsSettings, updateBotSettings } from "../api/botApi";

const BotContext = createContext();

function BotProvider({ children }) {
	const [intialBotsettings, setInitialBotsettings] = useState({});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function load() {
			try {
				const response = await fetchBotsSettings();
				setInitialBotsettings(response.data.botSettings);
			} catch (err) {
				console.error("Failed to load bot settings", err);
			}
			setLoading(false);
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
			const response = await updateBotSettings(partialUpdate);
			setInitialBotsettings(response.data.botSettings);
		} catch (err) {
			console.log(`Error in Update Bot Settings ${err}`);
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

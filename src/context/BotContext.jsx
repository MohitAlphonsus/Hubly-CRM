import { createContext, useState, useEffect } from "react";
import { fetchBotsSettings, updateBotSettings } from "../api/botApi";

const BotContext = createContext();

function BotProvider({ children }) {
	const [intialBotsettings, setInitialBotsettings] = useState({});

	useEffect(() => {
		handleFetchBotSettings();
	}, []);

	const handleFetchBotSettings = async () => {
		const response = await fetchBotsSettings();
		setInitialBotsettings(response.data);
	};

	const handleUpdateBotSettings = async (data) => {
		const updatedBotSettings = { ...data, [key]: value };
		setInitialBotsettings(updatedBotSettings);

		await updateBotSettings({ [key]: value });
	};

	return (
		<BotContext.Provider value={{ intialBotsettings, handleUpdateBotSettings }}>
			{children}
		</BotContext.Provider>
	);
}

export { BotContext, BotProvider };

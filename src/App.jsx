import Layout from "./router/Layout";
import { TeamAuthProvider } from "./context/teamAuthContext";
import { ChatProvider } from "./context/ChatContext";
import { TeamProvider } from "./context/TeamContext";
import { BotProvider } from "./context/BotContext";
export default function App() {
	return (
		<TeamAuthProvider>
			<BotProvider>
				<ChatProvider>
					<TeamProvider>
						<Layout />
					</TeamProvider>
				</ChatProvider>
			</BotProvider>
		</TeamAuthProvider>
	);
}

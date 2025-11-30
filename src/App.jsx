import Layout from "./router/Layout";
import { TeamAuthProvider } from "./context/teamAuthContext.jsx";
import { ChatProvider } from "./context/ChatContext.jsx";
import { TeamProvider } from "./context/TeamContext.jsx";
import { BotProvider } from "./context/BotContext.jsx";
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

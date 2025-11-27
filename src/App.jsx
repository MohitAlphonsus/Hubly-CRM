import Layout from "./router/Layout";
import { TeamAuthProvider } from "./context/teamAuthContext";
import { ChatProvider } from "./context/ChatContext";
import { TeamProvider } from "./context/TeamContext";
export default function App() {
	return (
		<TeamAuthProvider>
			<ChatProvider>
				<TeamProvider>
					<Layout />
				</TeamProvider>
			</ChatProvider>
		</TeamAuthProvider>
	);
}

import Layout from "./router/Layout";
import { TeamAuthProvider } from "./context/teamAuthContext";
import { ChatProvider } from "./context/ChatContext";
export default function App() {
	return (
		<TeamAuthProvider>
			<ChatProvider>
				<Layout />
			</ChatProvider>
		</TeamAuthProvider>
	);
}

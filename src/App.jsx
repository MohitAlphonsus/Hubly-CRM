import Layout from "./router/Layout";
import { TeamAuthProvider } from "./context/teamAuthContext";
export default function App() {
	return (
		<TeamAuthProvider>
			<Layout />
		</TeamAuthProvider>
	);
}

import { BrowserRouter, Route, Routes } from "react-router";
import { Landing, Login, Signup, Admin } from "../pages";
import {
	Home,
	ContactCenter,
	Analytics,
	Bots,
	Team,
	Setting,
} from "../components/admin/dashboard";
export default function Layout() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/admin" element={<Admin />}>
					<Route path="dashboard" element={<Home />} />
					<Route path="chats" element={<ContactCenter />} />
					<Route path="analytics" element={<Analytics />} />
					<Route path="bots" element={<Bots />} />
					<Route path="team" element={<Team />} />
					<Route path="setting" element={<Setting />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

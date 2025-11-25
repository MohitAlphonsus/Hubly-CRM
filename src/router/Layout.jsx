import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { Landing, Login, Signup, Admin } from "../pages";
import {
	Home,
	ContactCenter,
	Analytics,
	Bots,
	Team,
	Setting,
} from "../components/admin/dashboard";
import { useTeamAuth } from "../hooks/useTeamAuth";

export default function Layout() {
	const { currentTeamMember } = useTeamAuth();
	return (
		<BrowserRouter>
			<Routes>
				{!currentTeamMember && (
					<>
						<Route path="/" element={<Landing />} />
						<Route path="/login" element={<Login />} />
						<Route path="/signup" element={<Signup />} />
						<Route path="/admin/*" element={<Navigate to="/login" />} />
					</>
				)}

				{currentTeamMember && (
					<>
						<Route path="/" element={<Navigate to="/admin/dashboard" />} />
						<Route path="/login" element={<Navigate to="/admin/dashboard" />} />
						<Route path="/signup" element={<Navigate to="/admin/dashboard" />} />

						<Route path="/admin" element={<Navigate to="/admin/dashboard" />} replace />

						<Route path="/admin" element={<Admin />}>
							<Route path="dashboard" index element={<Home />} />
							<Route path="chats" element={<ContactCenter />} />
							<Route path="analytics" element={<Analytics />} />
							<Route path="bots" element={<Bots />} />
							<Route path="team" element={<Team />} />
							<Route path="setting" element={<Setting />} />
						</Route>
					</>
				)}

				<Route path="*" element={<Navigate to={currentTeamMember ? "/admin/dashboard" : "/"} replace />} />

			</Routes>
		</BrowserRouter>
	);
}

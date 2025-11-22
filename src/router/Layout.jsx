import { BrowserRouter, Route, Routes } from "react-router";
import Landing from "../pages/Landing";
import Login from "../pages/Login";
export default function Layout() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/login" element={<Login />}/>
			</Routes>
		</BrowserRouter>
	);
}

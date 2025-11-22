import {
	Header,
	Hero,
	Brands,
	About,
	Pricing,
	Footer,
} from "../components/landing";
import ChatInterfaceContainer from "../components/chat/ChatInterfaceContainer";
export default function Landing() {
	return (
		<>
			<Header />
			<Hero />
			<Brands />
			<About />
			<Pricing />
			<Footer />
			<ChatInterfaceContainer />
		</>
	);
}

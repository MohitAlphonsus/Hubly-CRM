import adobeLogo from "../assets/brands/adobe.png";
import airtableLogo from "../assets/brands/airtable.png";
import elasticLogo from "../assets/brands/elastic.png";
import framerLogo from "../assets/brands/framer.png";
import opendoorLogo from "../assets/brands/opendoor.png";

import envelopeIcon from "../assets/socials/envelope.svg";
import linkedinIcon from "../assets/socials/linkedin.svg";
import twitterIcon from "../assets/socials/twitter.svg";
import youtubeIcon from "../assets/socials/youtube.svg";
import discordIcon from "../assets/socials/discord.svg";
import figmaIcon from "../assets/socials/figma.svg";
import instagramIcon from "../assets/socials/instagram.svg";

export const BRANDS = [
	{ name: "Adobe", logo: adobeLogo },
	{ name: "Elastic", logo: elasticLogo },
	{ name: "OpenDoor", logo: opendoorLogo },
	{ name: "Airtable", logo: airtableLogo },
	{ name: "Elastic2", logo: elasticLogo },
	{ name: "Framer", logo: framerLogo },
];

export const aboutTexts = [
	{
		id: 1,
		title: "MULTIPLE PLATFORMS TOGETHER!",
		desc: "Email communication is a breeze with our fully integrated, drag & drop email builder.",
	},
	{
		id: 2,
		title: "Close",
		desc: "Capture leads using our landing pages, surveys, forms, calendars, inbound phone system & more!",
	},
	{
		id: 3,
		title: "Nurture",
		desc: "Capture leads using our landing pages, surveys, forms, calendars, inbound phone system & more!",
	},
];

export const PRICING_PLANS = [
	{
		id: 1,
		plan: "starter",
		desc: "Best for local businesses needing to improve their online reputation.",
		price: 199,
		included: [
			"Unlimited Users",
			"GMB Messaging",
			"Reputation Management",
			"GMB Call Tracking",
			"24/7 Award Winning Support",
		],
		action: "Sign up for starter",
	},
	{
		id: 2,
		plan: "grow",
		desc: "Best for all businesses that want to take full control of their marketing automation and track their leads, click to close.",
		price: 399,
		included: [
			"Pipeline Management",
			"Marketing Automation Campaigns",
			"Live Call Transfer",
			"GMB Messaging",
			"Embed-able Form Builder",
			"Reputation Management",
			"24/7 Award Winning Support",
		],
		action: "Sign up for grow",
	},
];

export const FOOTER_LINKS = [
	{
		id: 1,
		title: "Product",
		links: [
			"Universal checkout",
			"Payment workflows",
			"Observability",
			"Uplift AI",
			"Apps & integrations",
		],
	},
	{
		id: 2,
		title: "Why Primer",
		links: [
			"Expand to new markets",
			"Boost payment success",
			"Improve conversion rates",
			"Reduce payments fraud",
			"Recover revenue",
		],
	},
	{
		id: 3,
		title: "Developers",
		links: [
			"Primer Docs",
			"API Reference",
			"Payment methods guide",
			"Service statusd",
			"Community",
		],
	},
	{
		id: 4,
		title: "Resources",
		links: ["Blog", "Success stories", "News room", "Terms", "Privacy"],
	},
	{ id: 5, title: "Company", links: ["Careers"] },
];

export const SOCIAL_ICONS = [
	{ id: 1, icon: envelopeIcon },
	{ id: 2, icon: linkedinIcon },
	{ id: 3, icon: twitterIcon },
	{ id: 4, icon: youtubeIcon },
	{ id: 5, icon: discordIcon },
	{ id: 6, icon: figmaIcon },
	{ id: 7, icon: instagramIcon },
];

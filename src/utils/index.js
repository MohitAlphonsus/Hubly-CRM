export function generateInitials(name) {
	const parts = name.trim().split(/\s+/);

	if (parts.length === 1) {
		const first = parts[0][0].toUpperCase();
		return first + first;
	}

	const first = parts[0][0].toUpperCase();
	const second = parts[1][0].toUpperCase();
	return first + second;
}

export function capitalizeWords(str) {
	return str.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
}

export function formatChatDate(dateString) {
	return new Date(dateString).toLocaleDateString("en-US", {
		month: "short",
		day: "numeric",
		year: "numeric",
	});
}

export function formatPostedTime(dateString) {
	const date = new Date(dateString);

	let hours = date.getHours();
	let minutes = date.getMinutes();
	const ampm = hours >= 12 ? "PM" : "AM";

	hours = hours % 12;
	hours = hours || 12; // 0 → 12

	const formattedMinutes = String(minutes).padStart(2, "0");

	return `Posted at ${hours}:${formattedMinutes} ${ampm}`;
}

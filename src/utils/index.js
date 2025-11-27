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

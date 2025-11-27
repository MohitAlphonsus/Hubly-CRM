import { createContext, useState, useEffect } from "react";
import {
	startChat,
	sendUserMessage,
	sendAdminMessage,
	getUserMessages,
	getMessages,
	getMessagesByUserId,
} from "../api/chatApi";

const ChatContext = createContext();

function ChatProvider({ children }) {
	const [sessionToken, setSessionToken] = useState(
		localStorage.getItem("user-session") || null
	);
	const [userId, setUserId] = useState(localStorage.getItem("user-id") || null);
	const [conversations, setConversations] = useState([]);

	useEffect(() => {
		// const savedSessionToken = localStorage.getItem("session-token");
		// const savedUserId = localStorage.getItem("user-id");

		// if (savedSessionToken && savedUserId) {
		// 	setSessionToken(savedSessionToken);
		// 	setUserId(savedUserId);
		// }

		handleFetchUserMessages(sessionToken);
	}, []);

	const handleStartChat = async (formData) => {
		const response = await startChat(formData);

		const { sessionToken, _id } = response.data.user;

		setSessionToken(sessionToken);
		setUserId(_id);

		localStorage.setItem("user-session", sessionToken);
		localStorage.setItem("user-id", _id);
	};

	const handleUserSendingMessage = async (message) => {
		const response = await sendUserMessage({
			sessionToken,
			message,
		});

		const newMessage = response.data.newMessage;
		setConversations((prevMessages) => [...prevMessages, newMessage]);
	};

	const handleAdminSendingMessage = async (message) => {
		const response = await sendAdminMessage({
			userId,
			message,
		});

		const newMessage = response.data.newMessage;
		setConversations((prevMessages) => [...prevMessages, newMessage]);
	};

	const handleFetchAllMessages = async () => {
		const response = await getMessages();
		setConversations(response.data.messages);
	};

	const handleFetchUserMessages = async (sessionToken) => {
		const response = await getUserMessages(sessionToken);
		setConversations(response.data.messages);
	};

	const handleFetchMessagesByUserId = async (userId) => {
		const response = await getMessagesByUserId(userId);
		setConversations(response.data.messages);
	};

	return (
		<ChatContext.Provider
			value={{
				sessionToken,
				userId,
				conversations,
				setConversations,
				handleStartChat,
				handleUserSendingMessage,
				handleAdminSendingMessage,
				handleFetchAllMessages,
				handleFetchUserMessages,
				handleFetchMessagesByUserId,
			}}
		>
			{children}
		</ChatContext.Provider>
	);
}
export { ChatContext, ChatProvider };

import { createContext, useState, useEffect } from "react";
import {
	startChat,
	sendUserMessage,
	sendAdminMessage,
	getUserMessages,
	getMessages,
} from "../api/chatApi";
import { set } from "mongoose";

const ChatContext = createContext();

function ChatProvider({ children }) {
	const [sessionToken, setSessionToken] = useState(null);
	const [userId, setUserId] = useState(null);
	const [messages, setMessages] = useState([]);

	useEffect(() => {
		const savedSessionToken = localStorage.getItem("session-token");
		const savedUserId = localStorage.getItem("user-id");

		if (savedSessionToken && savedUserId) {
			setSessionToken(savedSessionToken);
			setUserId(savedUserId);
		}
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
		setMessages((prevMessages) => [...prevMessages, newMessage]);
	};

	const handleAdminSendingMessage = async (message) => {
		const response = await sendAdminMessage({
			userId,
			message,
		});

		const newMessage = response.data.newMessage;
		setMessages((prevMessages) => [...prevMessages, newMessage]);
	};

	const handleFetchAllMessages = async () => {
		const response = await getMessages();
		setMessages(response.data.messages);
	};

	const handleFetchUserMessages = async (sessionToken) => {
		const response = await getUserMessages(sessionToken);
		setMessages(response.data.messages);
	};
}

return (
	<ChatContext.Provider
		value={{
			sessionToken,
			userId,
			messages,
			setMessages,
			startChat: handleStartChat,
			userSendingMessage: handleUserSendingMessage,
			adminSendingMessage: handleAdminSendingMessage,
			fetchAllMessages: handleFetchAllMessages,
			fetchUserMessages: handleFetchUserMessages,
		}}
	>
		{children}
	</ChatContext.Provider>
);

export { ChatContext, ChatProvider };

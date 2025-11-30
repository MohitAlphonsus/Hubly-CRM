import { createContext, useState, useEffect } from "react";
import {
	startChat,
	sendUserMessage,
	sendAdminMessage,
	getUserMessages,
	getMessagesByUserId,
	getAllUsers,
	getUserById,
} from "../api/chatApi";

const ChatContext = createContext();

function ChatProvider({ children }) {
	const [sessionToken, setSessionToken] = useState(
		localStorage.getItem("user-session") || null
	);
	const [userId, setUserId] = useState(localStorage.getItem("user-id") || null);

	const [userMessages, setUserMessages] = useState([]);
	const [adminMessages, setAdminMessages] = useState([]);

	const [users, setUsers] = useState([]);
	const [selectedUser, setSelectedUser] = useState(null);

	useEffect(() => {
		if (sessionToken) {
			handleFetchUserMessages(sessionToken);
		}
	}, []);

	const handleStartChat = async (formData) => {
		const response = await startChat(formData);

		const { sessionToken, _id } = response.data.user;

		setSessionToken(sessionToken);
		setUserId(_id);

		localStorage.setItem("user-session", sessionToken);
		localStorage.setItem("user-id", _id);
		await handleFetchUserMessages(sessionToken);
	};

	const handleUserSendingMessage = async (message) => {
		const response = await sendUserMessage({
			sessionToken,
			message,
		});

		const newMessage = response.data.newMessage;
		setUserMessages((prevMessages) => [...prevMessages, newMessage]);
	};

	const handleAdminSendingMessage = async (message) => {
		const response = await sendAdminMessage({
			userId,
			message,
		});

		const newMessage = response.data.newMessage;
		setAdminMessages((prevMessages) => [...prevMessages, newMessage]);
	};

	const handleFetchUserMessages = async (sessionToken) => {
		const response = await getUserMessages(sessionToken);
		setUserMessages(response.data.messages);
	};

	const handleFetchMessagesByUserId = async (userId) => {
		const response = await getMessagesByUserId(userId);
		setAdminMessages(response.data.messages);
	};

	const handleFetchAllUsers = async () => {
		const response = await getAllUsers();
		setUsers(response.data.users);
	};

	const handleFetchUserById = async (userId) => {
		const response = await getUserById(userId);
		setSelectedUser(response.data.user);
	};

	const handleResolveTicket = async (userId) => {
		const response = await resolveTicket(userId);
		await handleFetchAllUsers();
	};

	return (
		<ChatContext.Provider
			value={{
				// user session
				sessionToken,
				userId,
				setUserId,

				// user chat
				userMessages,
				handleStartChat,
				handleUserSendingMessage,
				handleFetchUserMessages,

				// admin chat
				adminMessages,
				handleAdminSendingMessage,
				handleFetchMessagesByUserId,

				// admin users list
				users,
				selectedUser,
				handleFetchAllUsers,
				handleFetchUserById,
				handleResolveTicket,
			}}
		>
			{children}
		</ChatContext.Provider>
	);
}
export { ChatContext, ChatProvider };

import { createContext, useState } from "react";

const TeamContext = createContext();

function TeamProvider({ children }) {
	return <TeamContext.Provider value={{}}>{children}</TeamContext.Provider>;
}

export { TeamProvider, TeamContext };

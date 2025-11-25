import { useContext } from "react";
import { TeamAuthContext } from "../context/teamAuthContext";

export function useTeamAuth() {
  const context = useContext(TeamAuthContext);
  if (!context) {
    throw new Error("useTeamAuth must be used within a TeamAuthProvider");
  }
  return context;
}
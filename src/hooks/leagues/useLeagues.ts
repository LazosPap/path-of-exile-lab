import { useContext } from "react";

import LeaguesContext from "@/context/leagues/LeaguesProvider";

export function useLeagues() {
  const ctx = useContext(LeaguesContext);
  if (!ctx) {
    throw new Error("useLeagues must be a within a LeaguesProvider");
  }
  return ctx;
}

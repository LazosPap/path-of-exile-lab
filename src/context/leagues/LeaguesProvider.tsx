import { useQuery } from "@tanstack/react-query";
import { createContext, useState, type Dispatch, type ReactNode, type SetStateAction } from "react";

import { LEAGUES_ENDPOINTS } from "@/constants/endpoints";
import { getLeaguesQueryOptions } from "@/queries/leagues";

import type { League } from "@/types/endpointsServices";

export interface TLeaguesProviderContext {
  selectedLeague: League | undefined;
  isFetching: boolean;
  setSelectedLeague: Dispatch<SetStateAction<League | undefined>>;
  leaguesData: League[] | undefined;
}

const LeaguesContext = createContext<TLeaguesProviderContext | undefined>(undefined);

/** Context for all the leagues to have them on the store of the cotnext. */
export function LeaguesProvider({ children }: { children: ReactNode }) {
  const [selectedLeague, setSelectedLeague] = useState<League>();

  /** Call the query for the leagues dropdown data. */
  const { data: leaguesData, isFetching } = useQuery(
    getLeaguesQueryOptions({ endpoint: LEAGUES_ENDPOINTS.LEAGUES }),
  );

  return (
    <LeaguesContext.Provider value={{ leaguesData, isFetching, selectedLeague, setSelectedLeague }}>
      {children}
    </LeaguesContext.Provider>
  );
}

export default LeaguesContext;

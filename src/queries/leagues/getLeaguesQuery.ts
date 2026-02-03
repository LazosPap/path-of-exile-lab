import { queryOptions } from "@tanstack/react-query";

import { getLeagues } from "@/services/poeService/leagues";

import type { League } from "@/types/endpointsServices";
import type { LeaguesQueryOptionsParams } from "@/types/queryOptions";

/** Query key factory. */
export const leaguesKeys = {
  all: ["leagues"] as const,
  leagues: (endpoint: string) => [...leaguesKeys.all, endpoint],
};

/** Create query options for the based the key factory. */
export function getLeaguesQueryOptions({ endpoint }: LeaguesQueryOptionsParams) {
  return queryOptions<League[]>({
    queryKey: leaguesKeys.leagues(endpoint),
    queryFn: () => getLeagues<League[]>({ endpoint }),
    placeholderData: (prev) => prev,
  });
}

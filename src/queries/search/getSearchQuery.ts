import { queryOptions } from "@tanstack/react-query";

import { getSearch } from "@/services/poeService/search";

import type { GetSearchParams, SearchItem } from "@/types/endpointsServices";
import type { SearchQueryOptionsParams } from "@/types/queryOptions";

/** Query key factory. */
export const searchKeys = {
  all: ["search"] as const,
  search: (endpoint: string, queryParams: GetSearchParams) => [
    ...searchKeys.all,
    endpoint,
    queryParams,
  ],
};

/** Create query options for the based the key factory. */
export function getSearchQueryOptions({
  endpoint,
  queryParams,
  enabled,
}: SearchQueryOptionsParams) {
  return queryOptions<SearchItem[]>({
    queryKey: searchKeys.search(endpoint, queryParams),
    queryFn: () => getSearch<SearchItem[]>({ endpoint, queryParams }),
    placeholderData: (prev) => prev,
    enabled,
  });
}

import { queryOptions } from "@tanstack/react-query";

import { getItemDetails } from "@/services/poeService/item";
import { getSearch } from "@/services/poeService/search";

import type {
  GetItemDetailsParams,
  GetSearchParams,
  ItemHistory,
  SearchItems,
} from "@/types/endpointsServices";
import type { ItemDetailsOptionsParams, SearchQueryOptionsParams } from "@/types/queryOptions";

/** Query key factory. */
export const searchKeys = {
  all: ["search"] as const,
  search: (endpoint: string, queryParams: GetSearchParams) => [
    ...searchKeys.all,
    endpoint,
    queryParams,
  ],
  item: (endpoint: string, queryParams: GetItemDetailsParams) => [
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
  return queryOptions<SearchItems[]>({
    queryKey: searchKeys.search(endpoint, queryParams),
    queryFn: () => getSearch<SearchItems[]>({ endpoint, queryParams }),
    placeholderData: (prev) => prev,
    enabled,
  });
}

export function getItemDetailsOptions({
  endpoint,
  queryParams,
  enabled,
}: ItemDetailsOptionsParams) {
  return queryOptions<ItemHistory[]>({
    queryKey: searchKeys.item(endpoint, queryParams),
    queryFn: () => getItemDetails<ItemHistory[]>({ endpoint, queryParams }),
    placeholderData: (prev) => prev,
    enabled,
  });
}

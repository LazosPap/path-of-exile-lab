/** All the types for the queryOptions so we can have them all together in one place. */

import type {
  GetExchangeRatiosParams,
  GetItemsParams,
  GetSearchParams,
} from "@/types/endpointsServices";

export type LeaguesQueryOptionsParams = {
  endpoint: string;
};

export type SearchQueryOptionsParams = {
  endpoint: string;
  queryParams: GetSearchParams;
  enabled: boolean;
};

export type CategoriesQueryOptionsParams = {
  endpoint: string;
};

export type ItemsQueryOptionsParams = {
  endpoint: string;
  queryParams: GetItemsParams;
};

export type ExchangesQueryOptionsParams = {
  endpoint: string;
  enabled: boolean;
  queryParams: GetExchangeRatiosParams;
};

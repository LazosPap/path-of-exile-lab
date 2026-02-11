/** All the types for the queryOptions so we can have them all together in one place. */

import type { GetItemsParams } from "@/types/endpointsServices";

export type LeaguesQueryOptionsParams = {
  endpoint: string;
};

export type CategoriesQueryOptionsParams = {
  endpoint: string;
};

export type ItemsQueryOptionsParams = {
  endpoint: string;
  queryParams: GetItemsParams;
};

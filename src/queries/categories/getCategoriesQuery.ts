import { queryOptions } from "@tanstack/react-query";

import { getCategories, getItems } from "@/services/poeService/categories";

import type { Categories, GetItemsParams, Item } from "@/types/endpointsServices";
import type { CategoriesQueryOptionsParams, ItemsQueryOptionsParams } from "@/types/queryOptions";

/** Query key factory. */
export const categoriesKeys = {
  all: ["categories"] as const,
  categories: (endpoint: string) => [...categoriesKeys.all, endpoint],
  items: (endpoint: string, queryParams: GetItemsParams) => [
    ...categoriesKeys.all,
    endpoint,
    queryParams,
  ],
};

/** Create query options for the based the key factory. */
export function getCategoriesQueryOptions({ endpoint }: CategoriesQueryOptionsParams) {
  return queryOptions<Categories[]>({
    queryKey: categoriesKeys.categories(endpoint),
    queryFn: () => getCategories<Categories[]>({ endpoint }),
    placeholderData: (prev) => prev,
  });
}

export function getItemsQueryOptions({ endpoint, queryParams }: ItemsQueryOptionsParams) {
  return queryOptions({
    queryKey: categoriesKeys.items(endpoint, queryParams),
    queryFn: () => getItems<Item[]>({ endpoint, queryParams }),
    placeholderData: (prev) => prev,
  });
}

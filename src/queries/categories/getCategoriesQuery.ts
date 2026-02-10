import { queryOptions } from "@tanstack/react-query";

import { getCategories } from "@/services/poeService/categories";

import type { Categories } from "@/types/endpointsServices";
import type { CategoriesQueryOptionsParams } from "@/types/queryOptions";

/** Query key factory. */
export const categoriesKeys = {
  all: ["categories"] as const,
  categories: (endpoint: string) => [...categoriesKeys.all, endpoint],
};

/** Create query options for the based the key factory. */
export function getCategoriesQueryOptions({ endpoint }: CategoriesQueryOptionsParams) {
  return queryOptions<Categories[]>({
    queryKey: categoriesKeys.categories(endpoint),
    queryFn: () => getCategories<Categories[]>({ endpoint }),
    placeholderData: (prev) => prev,
  });
}

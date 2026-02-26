import { useQuery } from "@tanstack/react-query";
import { createFileRoute, useParams, useSearch } from "@tanstack/react-router";

import { BreadcrumbOutline } from "@/components/breadcrumb";
import { ItemCard } from "@/components/cards/ItemCard";
import { SEARCH_ENDPOINTS } from "@/constants/endpoints";
import { useLeagues } from "@/hooks/leagues";
import { getSearchQueryOptions } from "@/queries/search";

export const Route = createFileRoute("/(home)/$category/$itemName")({
  validateSearch: (search: Record<string, unknown>) => {
    /**
     * We are passing on the URL the id and the name since we need the id to identify the correct
     * item. For the name is to use it for the query param of the search endpoint.
     */
    return {
      id: Number(search.id),
      name: String(search.name),
    };
  },
  component: ItemPage,
});

export function ItemPage() {
  const { selectedLeague } = useLeagues();

  const params = useParams({ from: Route.id });

  const { id, name } = useSearch({ from: Route.id });

  /** @TODO ISLOADING AND ISFETCHING */
  const { data } = useQuery(
    getSearchQueryOptions({
      endpoint: SEARCH_ENDPOINTS.SEARCH,
      queryParams: {
        league: selectedLeague?.name,
        q: name,
      },
      enabled: !!selectedLeague?.name && !!id,
    }),
  );

  /** Find the id for each item since we don't have endpoint for specific item with id. */
  const item = data?.find((i) => i.id === id);

  if (!item) {
    return <div className="py-6">Item not found.</div>;
  }
  return (
    <div>
      <div className="flex min-w-full py-6">
        <BreadcrumbOutline category={params.category} itemName={params.itemName} />
      </div>
      <div className="py-6">
        <h1 className="text-4xl font-semibold text-black dark:text-white">{item.name}</h1>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div></div>
        <ItemCard
          name={item.name}
          imageUrl={item.icon}
          implicit={item.implicits ?? []}
          explicit={item.explicits ?? []}
          rarity="rare"
        />
      </div>
    </div>
  );
}

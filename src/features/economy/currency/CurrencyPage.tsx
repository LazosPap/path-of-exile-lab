import { useQuery } from "@tanstack/react-query";

import { DataTable } from "@/components/datatable";
import { columns } from "@/components/datatable/columns";
import { ITEMS_ENDPOINTS } from "@/constants/endpoints";
import { CATEGORY_NAMES } from "@/constants/sidebarItems";
import { getItemsQueryOptions } from "@/queries/categories";

import type { GetItemsParams } from "@/types/endpointsServices";

export function CurrencyPage() {
  /** @TODO UPDATE THIS HARDTEXT QUERY PARAMS */
  const queryParams: GetItemsParams = {
    league: "Phrecia 2.0",
    category: CATEGORY_NAMES.CURRENCY,
  };

  /** @TODO IMPORT FOR THE ISLOADING THE SKELETON DATATABLE. */
  const { data, isFetching } = useQuery(
    getItemsQueryOptions({ endpoint: ITEMS_ENDPOINTS.GET, queryParams }),
  );

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-semibold">Currency</h1>
      <DataTable columns={columns} data={data ?? []} isFetching={isFetching} />
    </div>
  );
}

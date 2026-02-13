import { useQuery } from "@tanstack/react-query";

import { DataTable } from "@/components/datatable";
import { columns } from "@/components/datatable/columns";
import { EXCHANGE_ENDPOINTS } from "@/constants/endpoints";
import { CATEGORY_NAMES } from "@/constants/sidebarItems";
import { useLeagues } from "@/hooks/leagues";
import { getExchangesQueryOptions } from "@/queries/categories";

import type { GetExchangeRatiosParams } from "@/types/endpointsServices";

export function CurrencyPage() {
  const { selectedLeague } = useLeagues();

  /** @TODO UPDATE THIS HARDTEXT QUERY PARAMS */
  const testParams: GetExchangeRatiosParams = {
    league: selectedLeague?.name,
    game: "poe1",
  };

  const { data, isFetching, isLoading } = useQuery(
    getExchangesQueryOptions({
      endpoint: EXCHANGE_ENDPOINTS.EXCHANGES_RATIOS,
      queryParams: testParams,
      enabled: !!selectedLeague?.name,
    }),
  );

  const currencyOnly = data?.filter((item) => item.category === CATEGORY_NAMES.CURRENCY);
  /** @TODO CREATE A CONFIG FOR EACH DATATABLE SO WE AVOID THE REPETITION. */
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-semibold">Currency</h1>
      <DataTable
        columns={columns}
        data={currencyOnly ?? []}
        isFetching={isFetching}
        isLoading={isLoading}
      />
    </div>
  );
}

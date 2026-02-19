import { useQueries } from "@tanstack/react-query";
import { useState } from "react";

import { DataTable } from "@/components/datatable";
import { Switch } from "@/components/motion";
import { Label } from "@/components/shadcn/label";
import { PAGE_CONFIG } from "@/constants/config";
import { exchangeColumns, stashColumns } from "@/features/economy/components/datatable/columns";
import { useLeagues } from "@/hooks/leagues";
import { getExchangesQueryOptions, getItemsQueryOptions } from "@/queries/categories";
import { type ModesConfig, type ModeType, type PageEntityProps } from "@/types/config";

export function EntityPage({ entityKey }: PageEntityProps) {
  const { TITLE, MODES } = PAGE_CONFIG[entityKey];

  const { selectedLeague } = useLeagues();

  const [selectedMode, setSelectedMode] = useState<ModeType>("EXCHANGE");

  /** Type the MODES since we are missing on some categories the exchange and keep the type safety. */
  const typedModes = MODES as Record<ModeType, ModesConfig>;

  const activeMode = typedModes[selectedMode];

  const stashMode = typedModes.STASH;
  const exchangeMode = typedModes.EXCHANGE;

  const [stashQuery, exchangeQuery] = useQueries({
    queries: [
      {
        ...getItemsQueryOptions({
          endpoint: stashMode.ENDPOINT,
          queryParams: {
            league: selectedLeague?.name,
            category: MODES.STASH.FILTER_CATEGORY,
            lowConfidence: false,
          },
          enabled: selectedMode === "STASH" && !!selectedLeague?.name,
        }),
      },
      {
        ...getExchangesQueryOptions({
          endpoint: exchangeMode.ENDPOINT,
          queryParams: {
            league: selectedLeague?.name,
            game: "poe1",
          },
          enabled: selectedMode === "EXCHANGE" && !!selectedLeague?.name,
        }),
      },
    ],
  });

  /** Don't render lowConfidence items from the exchangeQuery since it doesn't have query param. */
  const exchangeCategoryData = exchangeQuery.data
    ?.filter((item) => item.category === activeMode.FILTER_CATEGORY)
    ?.filter((item) => !item.divine?.lowConfidence);

  return (
    <div className="container mx-auto w-2/3 py-10">
      <h1 className="text-3xl font-semibold">{TITLE}</h1>
      <div className="flex items-center space-x-2 py-6">
        <Switch
          disabled={!selectedLeague?.name}
          checked={selectedMode === "EXCHANGE"}
          onCheckedChange={(checked) => setSelectedMode(checked ? "EXCHANGE" : "STASH")}
          aria-label="Switch exchange to stash"
          size="lg"
          id="large-switch"
        />
        <Label htmlFor="large-switch">{selectedMode}</Label>
      </div>
      {selectedMode === "EXCHANGE" ? (
        <DataTable
          key={selectedMode}
          columns={exchangeColumns}
          data={exchangeCategoryData ?? []}
          isFetching={exchangeQuery.isFetching}
          isLoading={exchangeQuery.isLoading}
          defaultSorting={[
            {
              id: "divineValue",
              desc: true,
            },
            {
              id: "chaosValue",
              desc: true,
            },
          ]}
        />
      ) : (
        <DataTable
          key={selectedMode}
          columns={stashColumns}
          data={stashQuery.data ?? []}
          isFetching={stashQuery.isFetching}
          isLoading={stashQuery.isLoading}
          defaultSorting={[
            {
              id: "divine",
              desc: true,
            },
          ]}
        />
      )}
    </div>
  );
}

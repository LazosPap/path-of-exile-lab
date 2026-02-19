import { ArrowUpDown } from "lucide-react";

import ButtonWrapper from "@/components/button/ButtonWrapper";
import MiniChart from "@/components/charts/MiniChart";
import { Skeleton } from "@/components/shadcn/skeleton";

import type { ExchangeItem } from "@/types/endpointsServices";
import type { ColumnDef } from "@tanstack/react-table";

export const exchangeColumns: ColumnDef<ExchangeItem>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <ButtonWrapper
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </ButtonWrapper>
      );
    },
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-2">
          <div className="flex size-10 w-fit shrink-0 items-center justify-center">
            <img src={row.original.icon} className="h-10 w-10 object-contain" />
          </div>
          <span>{row.original.name}</span>
        </div>
      );
    },
    meta: {
      skeleton: (
        <div className="flex items-center gap-2">
          <Skeleton className="h-10 w-10 rounded-md" />
          <Skeleton className="h-4 w-24" />
        </div>
      ),
    },
  },
  {
    id: "divineValue",
    accessorFn: (row: ExchangeItem) => {
      const divine = row.divine;
      const chaos = row.chaos;

      // Return the value we want to display in the table for sorting
      return divine?.value && divine.value >= 1
        ? (divine.divineValue ?? 0)
        : (chaos?.divineValue ?? 0);
    },
    header: ({ column }) => {
      return (
        <ButtonWrapper
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Divine orb
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </ButtonWrapper>
      );
    },
    cell: ({ row }) => {
      /** Determine the divine values and chaos values for the cell. */
      const divine = row.original.divine;
      const chaos = row.original.chaos;

      const useDivine = divine?.value && divine.value >= 1;

      const value = useDivine ? (divine?.divineValue ?? 0) : (chaos?.divineValue ?? 0);

      return (
        <div className="flex items-center gap-2">
          <div className="flex size-10 w-fit shrink-0 items-center justify-center">
            <img
              src="https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQ3VycmVuY3lNb2RWYWx1ZXMiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/e1a54ff97d/CurrencyModValues.png"
              className="h-8 w-8 object-contain"
            />
          </div>
          <span>{value}</span>
        </div>
      );
    },
    meta: {
      skeleton: (
        <div className="flex items-center gap-2">
          <Skeleton className="h-10 w-10 rounded-md" />
          <Skeleton className="h-4 w-16" />
        </div>
      ),
    },
  },
  {
    id: "chaosValue",
    accessorFn: (row: ExchangeItem) => {
      const divine = row.divine;
      const chaos = row.chaos;

      // Return the value we want to display in the table for sorting
      return divine?.value && divine.value >= 1
        ? (divine.chaosValue ?? 0)
        : (chaos?.chaosValue ?? 0);
    },
    header: ({ column }) => {
      return (
        <ButtonWrapper
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Chaos orb
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </ButtonWrapper>
      );
    },
    cell: ({ row }) => {
      /** Determine the divine values and chaos values for the cell. */
      const divine = row.original.divine;
      const chaos = row.original.chaos;

      const useChaos = divine?.value && divine.value >= 1;

      const value = useChaos ? (divine?.chaosValue ?? 0) : (chaos?.chaosValue ?? 0);

      return (
        <div className="flex items-center gap-2">
          <div className="flex size-10 w-fit shrink-0 items-center justify-center">
            <img
              src="https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQ3VycmVuY3lSZXJvbGxSYXJlIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/d119a0d734/CurrencyRerollRare.png"
              className="h-8 w-8 object-contain"
            />
          </div>
          <span>{value}</span>
        </div>
      );
    },
  },
  {
    id: "trend",
    accessorFn: (row: ExchangeItem) => {
      const divineChange = row.divine?.change24H ?? 0;
      const chaosChange = row.chaos?.change24H ?? 0;

      // If divine has real value use it, otherwise fallback
      return divineChange !== 0 ? divineChange : chaosChange;
    },
    header: ({ column }) => {
      return (
        <ButtonWrapper
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Last 7 days
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </ButtonWrapper>
      );
    },
    cell: ({ row }) => {
      const divine = row.original.divine;
      const chaos = row.original.chaos;

      const change =
        divine?.change24H && divine.change24H !== 0 ? divine.change24H : (chaos?.change24H ?? 0);

      const historyNumbers =
        divine?.history7D?.map((h) => h.meanPrice) ??
        chaos?.history7D?.map((h) => h.meanPrice) ??
        [];

      const colorClass =
        change > 0 ? "text-green-500" : change < 0 ? "text-red-500" : "text-muted-foreground";

      return (
        <div>
          <span className={`font-semibold ${colorClass}`}>
            {change > 0 ? `+${change}%` : `${change}%`}
          </span>
          <MiniChart data={historyNumbers.length ? historyNumbers : [0]} />
        </div>
      );
    },
    meta: {
      skeleton: (
        <div className="space-y-2">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-12 w-full rounded-md" />
        </div>
      ),
    },
  },
];

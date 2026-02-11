import { ArrowUpDown } from "lucide-react";

import ButtonWrapper from "@/components/button/ButtonWrapper";
import MiniChart from "@/components/charts/MiniChart";
import { Skeleton } from "@/components/shadcn/skeleton";

import type { Item } from "@/types/endpointsServices";
import type { ColumnDef } from "@tanstack/react-table";

/** @TODO REFACTOR THE COLUMNS SO WE CAN DO LESS HARD TEXT. */
export const columns: ColumnDef<Item>[] = [
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
    accessorKey: "mean",
    header: ({ column }) => {
      return (
        <ButtonWrapper
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Value
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </ButtonWrapper>
      );
    },
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-2">
          <div className="flex size-10 w-fit shrink-0 items-center justify-center">
            <img
              src="https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQ3VycmVuY3lSZXJvbGxSYXJlIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/d119a0d734/CurrencyRerollRare.png"
              className="h-10 w-10 object-contain"
            />
          </div>
          <span>{row.original.mean}</span>
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
    accessorKey: "history",
    id: "trend",
    header: ({ column }) => {
      return (
        <ButtonWrapper
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          History
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </ButtonWrapper>
      );
    },
    cell: ({ row }) => {
      const change = row.original.change;

      let colorClass = "text-muted-foreground";

      if (change > 0) colorClass = "text-green-500";
      if (change < 0) colorClass = "text-red-500";
      return (
        <div>
          <span className={`font-semibold ${colorClass}`}>
            {change > 0 ? `+${change}%` : `${change}%`}
          </span>
          <MiniChart data={row.original.history} />
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

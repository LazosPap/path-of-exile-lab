import { ArrowUpDown } from "lucide-react";

import ButtonWrapper from "@/components/button/ButtonWrapper";
import MiniChart from "@/components/charts/MiniChart";
import { Skeleton } from "@/components/shadcn/skeleton";

import type { Item } from "@/types/endpointsServices";
import type { ColumnDef } from "@tanstack/react-table";

export const stashColumns: ColumnDef<Item>[] = [
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
    accessorKey: "divine",
    id: "divine",
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
      const divine = row.original.divine;

      return (
        <div className="flex items-center gap-2">
          <div className="flex size-10 w-fit shrink-0 items-center justify-center">
            <img
              src="https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQ3VycmVuY3lNb2RWYWx1ZXMiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/e1a54ff97d/CurrencyModValues.png"
              className="h-8 w-8 object-contain"
            />
          </div>
          <span>{divine}</span>
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
    id: "mean",
    accessorFn: (row) => Number(row.mean ?? 0),
    sortingFn: "basic",
    header: ({ column }) => (
      <ButtonWrapper
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Chaos orb
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </ButtonWrapper>
    ),
    cell: ({ row }) => {
      const mean = Number(row.original.mean ?? 0);
      return (
        <div className="flex items-center gap-2">
          <div className="flex size-10 w-fit shrink-0 items-center justify-center">
            <img
              src="https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQ3VycmVuY3lSZXJvbGxSYXJlIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/d119a0d734/CurrencyRerollRare.png"
              className="h-8 w-8 object-contain"
            />
          </div>
          <span>{mean}</span>
        </div>
      );
    },
  },
  {
    id: "trend",
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

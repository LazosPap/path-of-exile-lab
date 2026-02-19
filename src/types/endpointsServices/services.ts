import type { CATEGORY_NAMES_STASH } from "@/constants/sidebarItems";
import type { Link, LinkComponentProps } from "@tanstack/react-router";

/** Import all the params & responses from the services. */
export type LeaguesParams = {
  endpoint: string;
};

export type CategoriesParams = {
  endpoint: string;
};
export type SearchParams = {
  endpoint: string;
  queryParams: GetSearchParams;
};

export type ItemsParams = {
  endpoint: string;
  queryParams: GetItemsParams;
};

export type ExchangeParams = {
  endpoint: string;
  queryParams: GetExchangeRatiosParams;
};

export type League = {
  name: string;
  start_date: string;
  end_date: string;
};

export type SearchItem = {
  id: string;
  icon: string;
  name: string;
};

/** Type for the const sidebar. */
export type SidebarSection = {
  name: string;
  categories: SidebarCategory[];
};

type SidebarCategory = {
  /** Pass for the names the value not the key since it's missmatching the uppercase with the lower case. */
  name: (typeof CATEGORY_NAMES_STASH)[keyof typeof CATEGORY_NAMES_STASH];
  /** Type safety routes from the tanstack router. */
  route: LinkComponentProps<typeof Link>["to"];
  /** URL string for each category. */
  icon: string;
};

export type Categories = {
  id: number;
  name: string; // Query param name usage
  display: string; // The user-friendly name for the category
  groups: []; // Sub-groups within this category.
};

export interface GetItemsParams {
  league: string | undefined;
  category: string;
  lowConfidence?: boolean;
  linkCount?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  gemLevel?: number;
  gemCorrupted?: boolean;
  itemLevel?: number;
  gemQuality?: number;
}

export interface GetSearchParams {
  league: string | undefined;
  q: string; // It's the item name
}

export interface GetExchangeRatiosParams {
  league: string | undefined;
  game: string;
}

export interface Item {
  id: number;
  name: string;
  category: string;
  group: string;
  frame: number;
  influences: null;
  linkCount: number;
  icon: string;

  mean: number;
  min: number;
  max: number;
  exalted: number;
  daily: number;
  change: number;
  divine: number;

  history: [];

  lowConfidence: boolean;
  perfectPrice: number;
  perfectAmount: number;

  implicits: string[] | null;
  explicits: string[] | null;
}

export interface ExchangeItem {
  id: number;
  name: string;
  icon: string;
  category: string;

  chaos: CurrencyData;
  divine: CurrencyData;

  // Top-level convenience values
  chaosValue: number;
  divineValue: number;
  change24H: number;
  lowConfidence: boolean;
  pairID: number;
  timestamp: number;
  value: number;
  volume: number;
  volume24H: number;
}

export interface CurrencyData {
  value: number;
  lowConfidence: boolean;
  timestamp: number;
  volume: number;
  change24H: number;
  chaosValue?: number;
  divineValue?: number;
  pairID?: number;
  history7D?: History7D[];
}

export interface History7D {
  date: string; // keep as string from API; you can convert to Date if needed
  meanPrice: number;
}

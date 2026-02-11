import type { CATEGORY_NAMES } from "@/constants/sidebarItems";
import type { Link, LinkComponentProps } from "@tanstack/react-router";

/** Import all the params & responses from the services. */
export type LeaguesParams = {
  endpoint: string;
};

export type CategoriesParams = {
  endpoint: string;
};

export type ItemsParams = {
  endpoint: string;
  queryParams: GetItemsParams;
};

export type League = {
  name: string;
  start_date: string;
  end_date: string;
};

/** Type for the const sidebar. */
export type SidebarSection = {
  name: string;
  categories: SidebarCategory[];
};

type SidebarCategory = {
  /** Pass for the names the value not the key since it's missmatching the uppercase with the lower case. */
  name: (typeof CATEGORY_NAMES)[keyof typeof CATEGORY_NAMES];
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
  league: string;
  category: string;
  lowConfidence?: boolean;
  linkCount?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  gemLevel?: number;
  gemCorrupted?: boolean;
  itemLevel?: number;
  gemQuality?: number;
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

  history: [];

  lowConfidence: boolean;
  perfectPrice: number;
  perfectAmount: number;

  implicits: string[] | null;
  explicits: string[] | null;
}

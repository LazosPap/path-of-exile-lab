import type { PAGE_CONFIG } from "@/constants/config";

export type EntityKey = keyof typeof PAGE_CONFIG;

export interface PageEntityProps {
  entityKey: EntityKey;
}

export type ModeType = "STASH" | "EXCHANGE";

export interface ModesConfig {
  ENDPOINT: string;
  FILTER_CATEGORY?: string;
}

export type EntityPageConfig = {
  TITLE: string;
  MODES: Partial<Record<ModeType, ModesConfig>>;
};

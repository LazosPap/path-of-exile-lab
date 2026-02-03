import { axiosInstance } from "@/services/axiosInstance";

import type { LeaguesParams } from "@/types/endpointsServices";

/** Generic type for the dynamic endpoint for the leagues. */
export async function getLeagues<T>({ endpoint }: LeaguesParams): Promise<T> {
  const response = await axiosInstance.get<T>(endpoint);

  return response.data;
}

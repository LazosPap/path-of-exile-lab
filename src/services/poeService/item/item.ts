import { axiosInstance } from "@/services/axiosInstance";

import type { ItemDetailsParams } from "@/types/endpointsServices";

export async function getItemDetails<T>({ endpoint, queryParams }: ItemDetailsParams): Promise<T> {
  const response = await axiosInstance.get<T>(endpoint, {
    params: queryParams,
  });
  return response.data;
}

import { axiosInstance } from "@/services/axiosInstance";

import type { SearchParams } from "@/types/endpointsServices";

export async function getSearch<T>({ endpoint, queryParams }: SearchParams): Promise<T> {
  const response = await axiosInstance.get<T>(endpoint, {
    params: queryParams,
  });
  return response.data;
}

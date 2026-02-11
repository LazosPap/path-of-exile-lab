import { axiosInstance } from "@/services/axiosInstance";

import type { CategoriesParams, ItemsParams } from "@/types/endpointsServices";

export async function getCategories<T>({ endpoint }: CategoriesParams): Promise<T> {
  const response = await axiosInstance.get<T>(endpoint);
  return response.data;
}

export async function getItems<T>({ endpoint, queryParams }: ItemsParams): Promise<T> {
  const response = await axiosInstance.get<T>(endpoint, {
    params: queryParams,
  });
  return response.data;
}

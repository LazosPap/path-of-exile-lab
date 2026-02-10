import { axiosInstance } from "@/services/axiosInstance";

import type { CategoriesParams } from "@/types/endpointsServices";

export async function getCategories<T>({ endpoint }: CategoriesParams): Promise<T> {
  const response = await axiosInstance.get<T>(endpoint);
  return response.data;
}

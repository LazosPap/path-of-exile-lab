import { MutationCache, QueryClient, type QueryKey } from "@tanstack/react-query";
import { toast } from "sonner";

/**
 * Util to call when we need the queryClient from the tanstack query,
 * also make global changes for the queryClient for all queries or mutations we need.
 *
 * On this file we global handler events on the UI flow.
 */

/** Declare global those meta values. */
declare module "@tanstack/react-query" {
  interface Register {
    mutationMeta: {
      invalidatesQuery?: QueryKey;
      successMessage?: string;
      errorMessage?: string;
    };
  }
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60,
      gcTime: 1000 * 60 * 5,
    },
  },
  mutationCache: new MutationCache({
    onSuccess: (_data, _variables, _context, mutation) => {
      const message = mutation.meta?.successMessage;
      toast.success(message);
    },
    onError: (_error, _variables, _context, mutation) => {
      /** Show the custom meta errorMessage or the API message */
      toast.error(mutation.meta?.errorMessage);
    },
    /** Accept array of queries [] or without if it's only 1 queryKey we want to invalidate.*/
    onSettled: (_data, _error, _variables, _context, mutation) => {
      {
        if (mutation.meta?.invalidatesQuery) {
          const queries: QueryKey[] = Array.isArray(mutation.meta.invalidatesQuery)
            ? (mutation.meta.invalidatesQuery as QueryKey[])
            : [mutation.meta.invalidatesQuery];

          for (const key of queries) {
            void queryClient.invalidateQueries({ queryKey: key });
          }
        }
      }
    },
  }),
});

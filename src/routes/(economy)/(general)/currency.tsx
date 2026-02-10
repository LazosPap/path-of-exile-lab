import { createFileRoute } from "@tanstack/react-router";

import { CurrencyPage } from "@/features/economy/currency";

export const Route = createFileRoute("/(economy)/(general)/currency")({
  component: RouteComponent,
});

function RouteComponent() {
  return <CurrencyPage />;
}

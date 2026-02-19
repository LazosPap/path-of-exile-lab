import { createFileRoute } from "@tanstack/react-router";

import { CurrencyPage } from "@/features/economy/components";

export const Route = createFileRoute("/(economy)/(general)/currency")({
  component: RouteComponent,
});

function RouteComponent() {
  return <CurrencyPage />;
}

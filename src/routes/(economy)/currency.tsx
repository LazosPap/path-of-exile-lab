import { createFileRoute } from "@tanstack/react-router";

import { CurrencyPage } from "@/features/economy/currency";

export const Route = createFileRoute("/(economy)/currency")({
  component: RouteComponent,
});

function RouteComponent() {
  return <CurrencyPage />;
}

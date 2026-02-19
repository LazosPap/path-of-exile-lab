import { createFileRoute } from "@tanstack/react-router";

import { BeastPage } from "@/features/economy/components";

export const Route = createFileRoute("/(economy)/(general)/beast")({
  component: RouteComponent,
});

function RouteComponent() {
  return <BeastPage />;
}
